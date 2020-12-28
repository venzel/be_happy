import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { DeleteUserService } from './DeleteUserService'
import { generateStatus } from '@shared/libs/utils'

class DeleteUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_user_id = String(req.query.id)

        const service = container.resolve(DeleteUserService)

        const user = await service.execute({ query_user_id, owner_id, role })

        const status = generateStatus(false, 200, 'Succesfully deleted user!')

        const doc = classToClass(user)

        return res.status(201).json({ status, doc })
    }
}

export { DeleteUserController }
