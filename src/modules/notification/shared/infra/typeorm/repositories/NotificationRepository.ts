import { MongoRepository, getMongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { Notification } from '@modules/notification/shared/infra/typeorm/schemas/Notification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'

class NotificationRepository implements INotificationRepository {
    private _repository: MongoRepository<INotification>

    constructor() {
        this._repository = getMongoRepository(Notification, 'mongo')
    }

    public async findById(notificationId: string): Promise<INotification | undefined> {
        return await this._repository.findOne({ _id: new ObjectID(notificationId) })
    }

    public async create(data: ICreateNotificationDTO): Promise<INotification> {
        const { ownerId, content } = data

        const notificationCreated = this._repository.create({ ownerId, content })

        await this._repository.save(notificationCreated)

        return notificationCreated
    }

    public async save(notification: INotification): Promise<INotification> {
        const currentDate = new Date()

        notification.updatedAt = currentDate

        await this._repository.save(notification)

        return notification
    }

    public async markAsRead(notification: INotification): Promise<INotification> {
        const currentDate = new Date()

        notification.read = true

        await this._repository.save(notification)

        return notification
    }

    public async list(): Promise<INotification[]> {
        return await this._repository.find()
    }
}

export { NotificationRepository }
