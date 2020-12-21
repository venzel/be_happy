import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { DeleteUserService } from './DeleteUserService'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'

class DeleteUserController {
    public async destroy(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const queryUserId = req.query.id as string

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const deleteUserService = new DeleteUserService(userRepository)

        const owner = { owner_id, role } as IAuth

        const userDeleted: IUser = await deleteUserService.execute(owner, queryUserId)

        const status = {
            error: false,
            code: 200,
            message: 'Succesfully deleted user!',
        }

        return res.status(201).json({ status, doc: classToClass(userDeleted) })
    }
}

export { DeleteUserController }
