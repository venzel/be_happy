import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { ShowUserService } from './ShowUserService'
import { IUser } from '@modules/user/shared/entities/IUser'

class ShowUserController {
    public async show(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const queryUserId = req.query.id as string

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const showUserService = new ShowUserService(userRepository)

        const owner = { owner_id, role } as IAuth

        const userShowed: IUser = await showUserService.execute(owner, queryUserId)

        const status = {
            error: false,
            code: 200,
            message: 'User showed successfully!',
        }

        return res.status(200).json({ status, doc: classToClass(userShowed) })
    }
}

export { ShowUserController }
