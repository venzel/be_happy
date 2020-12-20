import { injectable, inject } from 'tsyringe'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { IUpdateNotificationDTO } from '@modules/notification/shared/dtos/IUpdateNotificationDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class UpdateNotificationService {
    private _notificationRepository: INotificationRepository

    constructor(@inject('NotificationRepository') notificationRepository: INotificationRepository) {
        this._notificationRepository = notificationRepository
    }

    public async execute(owner: IAuth, data: IUpdateNotificationDTO): Promise<INotification> {
        const { ownerId, role } = owner

        const { notificationId } = data

        const existsNotification:
            | INotification
            | undefined = await this._notificationRepository.findOneById(notificationId)

        if (!existsNotification) throw new AppException('Notification not found!', 404)

        if (role === 'USER' && existsNotification.ownerId !== ownerId)
            throw new AppException('It not permited update another notification user id!', 403)

        await this._notificationRepository.markAsRead(existsNotification)

        return existsNotification
    }
}

export { UpdateNotificationService }
