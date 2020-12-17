import { ObjectID } from 'mongodb'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { NotificationFake } from '../schema/NotificationFake'

class NotificationRepositoryFake implements INotificationRepository {
    private _repository: INotification[]

    constructor() {
        this._repository = []
    }

    public async findById(notificationId: string): Promise<INotification | undefined> {
        return this._repository.find((data) => data._id === new ObjectID(notificationId))
    }

    public async create(data: ICreateNotificationDTO): Promise<INotification> {
        const { ownerId, content } = data

        const notificationFake = new NotificationFake()

        Object.assign(notificationFake, { _id: new ObjectID(), ownerId, content })

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

    public async list(): Promise<INotification[]> {
        return this._repository
    }
}

export { NotificationRepositoryFake }
