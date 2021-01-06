import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { ListNotificationsService } from './ListNotificationsService'
import { generateStatus } from '@shared/helpers/status'

class ListNotificationsController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_user_id = req.query.user_id as string | undefined

        const service = container.resolve(ListNotificationsService)

        const notifications = await service.execute({ query_user_id, owner_id, role })

        const status = generateStatus(false, 201, 'Succesfully listed notifictions!')

        const docs = classToClass(notifications)

        return res.status(201).json({ status, docs })
    }
}

export { ListNotificationsController }
