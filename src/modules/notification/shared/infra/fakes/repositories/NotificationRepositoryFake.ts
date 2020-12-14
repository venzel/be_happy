import { v4 as uuid } from 'uuid'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { NotificationFake } from '../entities/NotificationFake'

class NotificationRepositoryFake implements INotificationRepository {
    private _repository: INotification[]

    public async findById(notificationId: string): Promise<INotification | undefined> {
        return this._repository.find(({ id }) => id === notificationId)
    }

    public async create(data: ICreateNotificationDTO): Promise<INotification> {
        const { ownerId, content } = data

        const notificationFake = new NotificationFake()

        Object.assign(notificationFake, { id: uuid(), ownerId, content })

        this._repository.push(notificationFake)

        return notificationFake
    }

    public async save(notification: INotification): Promise<INotification> {
        const notificationIndex = this._repository.indexOf(notification)

        if (notificationIndex !== -1) {
            const currentDate = new Date()

            notification.updatedAt = currentDate

            this._repository[notificationIndex] = notification
        }

        return notification
    }

    public async markAsRead(notification: INotification): Promise<INotification> {
        const notificationIndex = this._repository.indexOf(notification)

        if (notificationIndex !== -1) {
            const currentDate = new Date()

            notification.updatedAt = currentDate
            notification.read = true

            this._repository[notificationIndex] = notification
        }

        return notification
    }
}

export { NotificationRepositoryFake }
