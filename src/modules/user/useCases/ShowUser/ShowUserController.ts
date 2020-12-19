import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { ShowUserService } from './ShowUserService'
import { IUser } from '@modules/user/shared/entities/IUser'

class ShowUserController {
    public async show(req: Request, res: Response): Promise<Response> {
        const { ownerId, role } = req.auth

        const dataUserAuth = { ownerId, role } as IAuth

        const queryUserId = String(req.query.id)

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const showUserService = new ShowUserService(userRepository)

        const userShowed: IUser = await showUserService.execute(queryUserId, dataUserAuth)

        const status = {
            error: false,
            code: 200,
            message: 'User showed successfully!',
        }

        return res.status(200).json({ status, data: classToClass(userShowed) })
    }
}

export { ShowUserController }
