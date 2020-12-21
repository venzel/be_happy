import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { DeleteUserService } from './DeleteUserService'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { statusMessage } from '@shared/libs/Utils'

class DeleteUserController {
    public async destroy(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_user_id = String(req.query.id)

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const deleteUserService = new DeleteUserService(userRepository)

        const userDeleted: IUser = await deleteUserService.execute({ query_user_id, owner_id, role })

        const status = statusMessage(false, 200, 'Succesfully deleted user!')

        return res.status(201).json({ status, doc: classToClass(userDeleted) })
    }
}

export { DeleteUserController }
