import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { ICacheProvider } from '@shared/providers/CacheProvider/models/ICacheProvider'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { ICreatePayloadDTO } from '@modules/user/shared/dtos/ICreatePayloadDTO'
import { IRoleDTO } from '@modules/user/shared/dtos/IRoleDTO'
import { environment } from '@configs/geral'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('CacheProvider') private _cacheProvider: ICacheProvider,
        @inject('HashProvider') private _hashProvider: IHashProvider,
        @inject('TokenProvider') private _tokenProvider: ITokenProvider,
        @inject('QueueProvider') private _queueProvider: IQueueProvider
    ) {}

    public async execute(data: ICreateUserDTO): Promise<IUser> {
        const { name, email, password } = data

        /* Find only user by email */

        const existsUserWithEmail: IUser | undefined = await this._userRepository.findOneByEmail(email)

        /* Exception estrategy guard */

        if (existsUserWithEmail) throw new AppException('User email already exists!', 400)

        /* Cache to state var role */

        let role: IRoleDTO = 'ADMIN'

        const existsKeyExistsUsers: JSON | null = await this._cacheProvider.findByKey('exists_user')

        if (existsKeyExistsUsers !== null) role = 'USER'

        if (existsKeyExistsUsers === null) {
            const countUsersInRepository: number = await this._userRepository.count()

            if (countUsersInRepository >= 1) role = 'USER'
        }

        /* Hash password */

        const generatedHashPassword: string = await this._hashProvider.gererateHash(password)

        /* Activated */

        const activated: boolean = environment === 'development' ? true : false

        console.log(activated)

        /* User created */

        const createdUser: IUser = await this._userRepository.create({
            name,
            email,
            password: generatedHashPassword,
            activated,
            role,
        })

        /* Payload generated */

        const generatedPayload: ICreatePayloadDTO = { owner_id: createdUser.id, role, activated }

        /* Token generated */

        const generatedToken: string = await this._tokenProvider.generateToken(generatedPayload)

        /* User object assign */

        Object.assign(createdUser, { token: generatedToken })

        /* Cache register */

        if (!existsKeyExistsUsers) await this._cacheProvider.save('exists_user', true, 30000)

        /* Return final */

        return createdUser
    }
}

export { CreateUserService }
