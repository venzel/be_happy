import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ITokenProvider } from '@modules/user/shared/providers/TokenProvider/models/ITokenProvider'
import { IQueueProvider } from '@shared/providers/QueueProvider/models/IQueueProvider'
import { CreateUserService } from './CreateUserService'
import { IUser } from '@modules/user/shared/entities/IUser'
import { generateStatus } from '@shared/libs/utils'

class CreateUserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider = container.resolve<IHashProvider>('HashProvider')
        const tokenProvider = container.resolve<ITokenProvider>('TokenProvider')
        const queueProvider = container.resolve<IQueueProvider>('QueueProvider')

        const createUserService = new CreateUserService(
            userRepository,
            hashProvider,
            tokenProvider,
            queueProvider
        )

        const createdUser: IUser = await createUserService.execute({ name, email, password })

        const status = generateStatus(false, 201, 'Succesfully created user!')

        return res.status(201).json({ status, doc: classToClass(createdUser) })
    }
}

export { CreateUserController }
