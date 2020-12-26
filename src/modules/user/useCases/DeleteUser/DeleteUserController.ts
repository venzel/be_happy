import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { DeleteUserService } from './DeleteUserService'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { generateStatus } from '@shared/libs/utils'

class DeleteUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_user_id = String(req.query.id)

        const userRepository = container.resolve<IUserRepository>('UserRepository')

        const deleteUserService = new DeleteUserService(userRepository)

        const deletedUser: IUser = await deleteUserService.execute({ query_user_id, owner_id, role })

        const status = generateStatus(false, 200, 'Succesfully deleted user!')

        return res.status(201).json({ status, doc: classToClass(deletedUser) })
    }
}

export { DeleteUserController }
