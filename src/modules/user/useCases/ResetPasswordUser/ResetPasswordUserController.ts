import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ResetPasswordUserService } from './ResetPasswordUserService'
import { generateStatus } from '@shared/libs/utils'

class ResetPasswordUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { new_password, token } = req.body

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const userTokenRepository = container.resolve<IUserTokenRepository>('UserTokenRepository')
        const hashProvider = container.resolve<IHashProvider>('HashProvider')

        const resetPasswordUserService = new ResetPasswordUserService(
            userRepository,
            userTokenRepository,
            hashProvider
        )

        await resetPasswordUserService.execute({ new_password, token })

        const status = generateStatus(false, 200, 'Succesfully password user reseted!')

        return res.status(200).json({ status })
    }
}

export { ResetPasswordUserController }
