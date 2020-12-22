import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { AuthenticateUserService } from './AuthenticateUserService'
import { generateStatus } from '@shared/libs/Utils'

class AuthenticateUserController {
    public async authenticate(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        const userRepository: IUserRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider: IHashProvider = container.resolve<IHashProvider>('HashProvider')
        const tokenProvider: ITokenProvider = container.resolve<ITokenProvider>('TokenProvider')

        const authenticateUserService = new AuthenticateUserService(
            userRepository,
            hashProvider,
            tokenProvider
        )

        const authenticatedUser: IUser = await authenticateUserService.execute({ email, password })

        const statusGenerated = generateStatus(false, 200, 'Succesfully authenticated user!')

        return res.status(200).json({ status: statusGenerated, doc: classToClass(authenticatedUser) })
    }
}

export { AuthenticateUserController }
