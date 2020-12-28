import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IAuthenticateUserDTO } from './IAuthenticateUserDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('TokenProvider') private _tokenProvider: ITokenProvider,
        @inject('HashProvider') private _hashProvider: IHashProvider
    ) {}

    public async execute(data: IAuthenticateUserDTO): Promise<IUser> {
        const { email, password } = data

        const existsUserWithEmail = await this._userRepository.findOneByEmail(email)

        if (!existsUserWithEmail) {
            throw new AppException('Email or password invalid!', 403)
        }

        const { id, role, activated, allowed, password: userDataPassword } = existsUserWithEmail

        if (!allowed) {
            throw new AppException('User not allowed!', 403)
        }

        const isPasswordEquals: boolean = await this._hashProvider.compareHash(
            password,
            userDataPassword
        )

        if (!isPasswordEquals) {
            throw new AppException('Email or password invalid!', 403)
        }

        /* Generate token by provider */
        const generatedToken: string = await this._tokenProvider.generateToken({
            owner_id: id,
            role,
            activated,
        })

        /* End generate token by provider */

        Object.assign(existsUserWithEmail, { token: generatedToken })

        return existsUserWithEmail
    }
}

export { AuthenticateUserService }
