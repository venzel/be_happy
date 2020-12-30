import { MongoRepository, getMongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotification } from '@modules/notification/shared/models/schemas/INotification'
import { MongoNotification } from '@modules/notification/shared/infra/typeorm/mongodb/schemas/MongoNotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'

class MongoNotificationRepository implements INotificationRepository {
    private _repository: MongoRepository<INotification>

    constructor() {
        this._repository = getMongoRepository(MongoNotification, 'mongodb')
    }

    public async findOneById(notification_id: string): Promise<INotification | undefined> {
        return await this._repository.findOne({ _id: new ObjectID(notification_id) })
    }

    public async create(data: ICreateNotificationDTO): Promise<INotification> {
        const { owner_id, content } = data

        const notificationCreated = this._repository.create({ owner_id, content })

        await this._repository.save(notificationCreated)

        return notificationCreated
    }

    public async save(notification: INotification): Promise<INotification> {
        const currentDate = new Date()

        notification.updated_at = currentDate

        await this._repository.save(notification)

        return notification
    }

    public async markAsRead(notification: INotification): Promise<INotification> {
        notification.read = true

        await this._repository.save(notification)

        return notification
    }

    public async list(): Promise<INotification[]> {
        return await this._repository.find()
    }
}

export { MongoNotificationRepository }
