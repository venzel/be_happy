import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { DeleteUserService } from './DeleteUserService'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'

class DeleteUserController {
    public async destroy(req: Request, res: Response): Promise<Response> {
        const { ownerId, role } = req.auth

        const dataAuthUser = { ownerId, role } as IAuth

        const userIdDelete = String(req.query.id)

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const deleteUserService = new DeleteUserService(userRepository)

        const userDeleted: IUser = await deleteUserService.execute(userIdDelete, dataAuthUser)

        const status = {
            error: false,
            code: 200,
            message: 'Succesfully deleted user!',
        }

        return res.status(201).json({ status, data: classToClass(userDeleted) })
    }
}

export { DeleteUserController }
