import { injectable, inject } from 'tsyringe'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class UpdateNotificationService {
    private _notificationRepository: INotificationRepository

    constructor(@inject('NotificationRepository') notificationRepository: INotificationRepository) {
        this._notificationRepository = notificationRepository
    }

    public async execute(notificationId: string, data: IAuth): Promise<INotification> {
        const { ownerId, role } = data

        const existNotification: INotification | undefined = await this._notificationRepository.findById(
            notificationId
        )

        if (!existNotification) throw new AppException('Notification not found!', 404)

        if (role === 'USER' && existNotification.ownerId !== ownerId)
            throw new AppException('It not permited update another notification user id!', 403)

        await this._notificationRepository.markAsRead(existNotification)

        return existNotification
    }
}

export { UpdateNotificationService }
