import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { UpdateNotificationService } from './UpdateNotificationService'
import { INotification } from '@modules/notification/shared/entities/INotification'

class UpdateNotificationController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { ownerId, role } = req.auth
        const notificationId = req.query.id as string

        const notificationRepository = container.resolve<INotificationRepository>(
            'NotificationRepository'
        )

        const updateNotificationService = new UpdateNotificationService(notificationRepository)

        const dataUserAuth: IAuth = { ownerId, role } as IAuth

        const notificationUpdated: INotification = await updateNotificationService.execute(
            notificationId,
            dataUserAuth
        )

        const status = {
            error: false,
            code: 200,
            message: 'Succesfully updated notification!',
        }

        const data = classToClass(notificationUpdated)

        return res.status(200).json({ status, data })
    }
}

export { UpdateNotificationController }
