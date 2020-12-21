import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { UpdateNotificationService } from './UpdateNotificationService'
import { INotification } from '@modules/notification/shared/entities/INotification'

class UpdateNotificationController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const { notificationId } = req.body

        const notificationRepository = container.resolve<INotificationRepository>(
            'NotificationRepository'
        )

        const updateNotificationService = new UpdateNotificationService(notificationRepository)

        const owner = { owner_id, role } as IAuth

        const data = { notificationId }

        const notificationUpdated: INotification = await updateNotificationService.execute(owner, data)

        const status = {
            error: false,
            code: 200,
            message: 'Succesfully updated notification!',
        }

        return res.status(200).json({ status, doc: classToClass(notificationUpdated) })
    }
}

export { UpdateNotificationController }
