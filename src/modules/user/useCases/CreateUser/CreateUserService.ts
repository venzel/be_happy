import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
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
        const { name, email, password, role } = data

        const existsUser: IUser | undefined = await this._userRepository.findByEmail(email)

        if (existsUser) throw new AppException('User already exists!', 400)

        const hashPassword = await this._hashProvider.gererateHash(password)

        const createdUser: IUser = await this._userRepository.create({
            name,
            email,
            password: hashPassword,
            role,
        })

        // const { id: ownerId, activated } = createdUser

        // const payload: ICreatePayloadDTO = { ownerId, role, activated }

        // const token = await this.tokenProvider.generateToken(payload)

        // Object.assign(newUser, { token })

        // const dataMailJob = { data: { name, email } }

        // await this.queueProvider.enqueue('MailTrap', dataMailJob)

        return createdUser
    }
}

export { CreateUserService }
