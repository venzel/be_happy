import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { MarkReadNotificationService } from './MarkReadNotificationService'
import { generateStatus } from '@shared/helpers/status'

class MarkReadNotificationController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const query_notification_id = String(req.query.id)

        const service = container.resolve(MarkReadNotificationService)

        const notification = await service.execute({ query_notification_id, owner_id })

        const status = generateStatus(false, 200, 'Succesfully updated notification!')

        const doc = classToClass(notification)

        return res.status(200).json({ status, doc })
    }
}

export { MarkReadNotificationController }
