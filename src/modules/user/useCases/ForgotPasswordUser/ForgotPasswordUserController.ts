import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { generateStatus } from '@shared/libs/utils'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { ForgotPasswordUserService } from './ForgotPasswordUserService'

class ForgotPasswordUserController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { email } = req.body

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const userTokenRepository = container.resolve<IUserTokenRepository>('UserTokenRepository')
        const queueProvider = container.resolve<IQueueProvider>('QueueProvider')

        const forgotPasswordUserService = new ForgotPasswordUserService(
            userRepository,
            userTokenRepository,
            queueProvider
        )

        const generatedToken: string = await forgotPasswordUserService.execute(email)

        const status = generateStatus(false, 200, 'Succesfully forgot password user!')

        return res.status(200).json({ status, doc: { token: generatedToken } })
    }
}

export { ForgotPasswordUserController }
