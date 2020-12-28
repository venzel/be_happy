import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { IGenerateIdProvider } from '@shared/providers/generateIdProvider/model/IGenerateIdProvider'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ForgotPasswordUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('UserTokenRepository') private _userTokenRepository: IUserTokenRepository,
        @inject('GenerrateIdProvider') private _generateIdProvider: IGenerateIdProvider,
        @inject('QueueProvider') private _queueProvider: IQueueProvider
    ) {}

    public async execute(email: string): Promise<string> {
        const existsUserWithEmail = await this._userRepository.findOneByEmail(email)

        if (!existsUserWithEmail) {
            throw new AppException('User does not exists!', 404)
        }

        /* Generate token id by provider */

        const token_id = this._generateIdProvider.generateId()

        /* End generate token id by provider */

        const owner_id: string = existsUserWithEmail.id

        const generetadToken: string = await this._userTokenRepository.generateToken({
            token_id,
            owner_id,
        })

        return generetadToken
    }
}

export { ForgotPasswordUserService }
