import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { ShowUserService } from './ShowUserService'
import { generateStatus } from '@shared/libs/utils'

class ShowUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_user_id = String(req.query.id)

        const showUserService = container.resolve(ShowUserService)

        const user = await showUserService.execute({ query_user_id, owner_id, role })

        const status = generateStatus(false, 200, 'Succesfully showed user!')

        const doc = classToClass(user)

        return res.status(200).json({ status, doc })
    }
}

export { ShowUserController }
