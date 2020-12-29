import { injectable, inject } from 'tsyringe'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { IUpdateNotificationDTO } from '@modules/notification/shared/dtos/IUpdateNotificationDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class MarkReadNotificationService {
    constructor(
        @inject('NotificationRepository') private _notificationRepository: INotificationRepository
    ) {}

    public async execute(data: IUpdateNotificationDTO): Promise<INotification> {
        const { query_notification_id, owner_id } = data

        const existsNotification = await this._notificationRepository.findOneById(query_notification_id)

        if (!existsNotification) {
            throw new AppException('Notification not found!', 404)
        }

        if (existsNotification.owner_id !== owner_id) {
            throw new AppException('It not permited update another notification user id!', 403)
        }

        const markedAsReadNotification = await this._notificationRepository.markAsRead(
            existsNotification
        )

        return markedAsReadNotification
    }
}

export { MarkReadNotificationService }
