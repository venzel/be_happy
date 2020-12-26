import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { IResetPasswordUserDTO } from './IResetPasswordUserDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ResetPasswordUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('UserTokenRepository') private _userTokenRepository: IUserTokenRepository,
        @inject('HashProvider') private _hashProvider: IHashProvider
    ) {}

    public async execute(data: IResetPasswordUserDTO): Promise<void> {
        const { new_password, token } = data

        const existsUserToken = await this._userTokenRepository.findOneByToken(token)

        if (!existsUserToken) throw new AppException('User token does not exists!', 404)

        const { owner_id } = existsUserToken

        const existsUserWithId = await this._userRepository.findOneById(owner_id)

        if (!existsUserWithId) throw new AppException('User does not exists!', 404)

        const generatedHashPassword: string = await this._hashProvider.gererateHash(new_password)

        /* Updated user data */

        existsUserWithId.password = generatedHashPassword

        /* Delete all tokens */

        await this._userTokenRepository.deleteTokensByOwnerId(owner_id)

        /* End delete all tokens */
    }
}

export { ResetPasswordUserService }
