import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { AuthenticateUserService } from './AuthenticateUserService'

class AuthenticateUserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        const userRepository: IUserRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider: IHashProvider = container.resolve<IHashProvider>('HashProvider')
        const tokenProvider: ITokenProvider = container.resolve<ITokenProvider>('TokenProvider')

        const authenticateUserService = new AuthenticateUserService(
            userRepository,
            hashProvider,
            tokenProvider
        )

        const existsUser: IUser = await authenticateUserService.execute({ email, password })

        const status = {
            error: false,
            code: 200,
            message: 'User found successfully!',
        }

        const data = classToClass(existsUser)

        return res.status(200).json({ status, data })
    }
}

export { AuthenticateUserController }
