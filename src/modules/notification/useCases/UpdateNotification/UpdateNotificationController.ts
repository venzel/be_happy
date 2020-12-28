import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { UpdateNotificationService } from './UpdateNotificationService'
import { generateStatus } from '@shared/libs/utils'

class UpdateNotificationController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_notification_id = String(req.query.id)

        const service = container.resolve(UpdateNotificationService)

        const notification = await service.execute({ query_notification_id, owner_id, role })

        const status = generateStatus(false, 200, 'Succesfully updated notification!')

        const doc = classToClass(notification)

        return res.status(200).json({ status, doc })
    }
}

export { UpdateNotificationController }
