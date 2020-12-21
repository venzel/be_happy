import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { ShowUserService } from './ShowUserService'
import { IUser } from '@modules/user/shared/entities/IUser'
import { statusMessage } from '@shared/libs/Utils'

class ShowUserController {
    public async show(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_user_id = String(req.query.id)

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const showUserService = new ShowUserService(userRepository)

        const userShowed: IUser = await showUserService.execute({ query_user_id, owner_id, role })

        const status = statusMessage(false, 200, 'Succesfully showed user!')

        return res.status(200).json({ status, doc: classToClass(userShowed) })
    }
}

export { ShowUserController }
