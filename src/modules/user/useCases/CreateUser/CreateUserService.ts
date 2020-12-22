import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { ICreatePayloadDTO } from '@modules/user/shared/dtos/ICreatePayloadDTO'
import { IRoleDTO } from '@modules/user/shared/dtos/IRoleDTO'
import { environment } from '@configs/Geral'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('HashProvider') private _hashProvider: IHashProvider,
        @inject('TokenProvider') private _tokenProvider: ITokenProvider,
        @inject('QueueProvider') private _queueProvider: IQueueProvider
    ) {}

    public async execute(data: ICreateUserDTO): Promise<IUser> {
        const { name, email, password } = data

        const existsUserWithEmail: IUser | undefined = await this._userRepository.findOneByEmail(email)

        if (existsUserWithEmail) throw new AppException('User email already exists!', 400)

        const generatedHashPassword: string = await this._hashProvider.gererateHash(password)

        const activated: boolean = environment === 'development' ? true : false

        const role: IRoleDTO = environment === 'development' ? 'ADMIN' : 'USER'

        const createdUser: IUser = await this._userRepository.create({
            name,
            email,
            password: generatedHashPassword,
            activated,
            role,
        })

        const generatedPayload: ICreatePayloadDTO = { owner_id: createdUser.id, role, activated }

        const generatedToken: string = await this._tokenProvider.generateToken(generatedPayload)

        Object.assign(createdUser, { token: generatedToken })

        return createdUser
    }
}

export { CreateUserService }
