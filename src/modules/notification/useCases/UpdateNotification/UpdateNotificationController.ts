import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { UpdateNotificationService } from './UpdateNotificationService'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { generateStatus } from '@shared/libs/utils'

class UpdateNotificationController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_notification_id = String(req.query.id)

        const notificationRepository = container.resolve<INotificationRepository>(
            'NotificationRepository'
        )

        const updateNotificationService = new UpdateNotificationService(notificationRepository)

        const notificationUpdated: INotification = await updateNotificationService.execute({
            query_notification_id,
            owner_id,
            role,
        })

        const status = generateStatus(false, 200, 'Succesfully updated notification!')

        return res.status(200).json({ status, doc: classToClass(notificationUpdated) })
    }
}

export { UpdateNotificationController }
