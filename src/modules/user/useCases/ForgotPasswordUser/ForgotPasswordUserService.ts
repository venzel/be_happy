import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ForgotPasswordUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('UserTokenRepository') private _userTokenRepository: IUserTokenRepository,
        @inject('QueueProvider') private _queueProvider: IQueueProvider
    ) {}

    public async execute(email: string): Promise<string> {
        const existsUserWithEmail = await this._userRepository.findOneByEmail(email)

        if (!existsUserWithEmail) throw new AppException('User does not exists!', 404)

        const generetadToken: string = await this._userTokenRepository.generateToken(
            existsUserWithEmail.id
        )

        return generetadToken
    }
}

export { ForgotPasswordUserService }
