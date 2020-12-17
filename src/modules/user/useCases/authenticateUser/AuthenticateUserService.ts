import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IAuthenticateUserDTO } from '@modules/user/shared/dtos/IAuthenticateUserDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('HashProvider') private _hashProvider: IHashProvider,
        @inject('TokenProvider') private _tokenProvider: ITokenProvider
    ) {}

    public async execute(data: IAuthenticateUserDTO): Promise<IUser> {
        const { email, password } = data

        const existsUser: IUser | undefined = await this._userRepository.findByEmail(email)

        if (!existsUser) {
            throw new AppException('Email or password invalid!', 403)
        }

        if (!existsUser.allowed) {
            throw new AppException('User not allowed!', 403)
        }

        const passwordEquals: boolean = await this._hashProvider.compareHash(
            password,
            existsUser.password
        )

        if (!passwordEquals) {
            throw new AppException('Email or password invalid!', 403)
        }

        const { id, role, activated } = existsUser

        const token: string = await this._tokenProvider.generateToken({
            ownerId: id,
            role,
            activated,
        })

        Object.assign(existsUser, { token })

        return existsUser
    }
}

export { AuthenticateUserService }
