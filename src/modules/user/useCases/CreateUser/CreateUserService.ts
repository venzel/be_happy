import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUserEntity } from '@modules/user/shared/models/entities/IUserEntity'
import { ICreatePayloadDTO } from '@modules/user/shared/dtos/ICreatePayloadDTO'
import { IGenerateIdProvider } from '@shared/providers/generateIdProvider/model/IGenerateIdProvider'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('GenerateIdProvider') private _generateIdProvider: IGenerateIdProvider,
        @inject('HashProvider') private _hashProvider: IHashProvider,
        @inject('TokenProvider') private _tokenProvider: ITokenProvider,
        @inject('QueueProvider') private _queueProvider: IQueueProvider
    ) {}

    public async execute(data: ICreateUserDTO): Promise<IUserEntity> {
        const { name, email, password, activated, role } = data

        /* Find user by email */

        const existsUser = await this._userRepository.findOneByEmail(email)

        /* Exception estrategy guard */

        if (existsUser) {
            throw new AppException('User email already exists!', 400)
        }

        /* Generate user id by provider */

        const generatedUserId: string = this._generateIdProvider.generateId()

        /* Generate hash password by provider */

        const generatedHashPassword: string = await this._hashProvider.gererateHash(password)

        /* Vars conditional */

        const data_activated = activated || false

        const data_role = role || 'USER'

        /* User created */

        const createdUser = await this._userRepository.create({
            user_id: generatedUserId,
            name,
            email,
            password: generatedHashPassword,
            activated: data_activated,
            role: data_role,
        })

        /* Payload generated */

        const generatedPayload: ICreatePayloadDTO = {
            owner_id: createdUser.id,
            activated: data_activated,
            role: data_role,
        }

        /* Token generated */

        const generatedToken: string = await this._tokenProvider.generateToken(generatedPayload)

        /* User object assign */

        Object.assign(createdUser, { token: generatedToken })

        /* Return created user */

        return createdUser
    }
}

export { CreateUserService }
