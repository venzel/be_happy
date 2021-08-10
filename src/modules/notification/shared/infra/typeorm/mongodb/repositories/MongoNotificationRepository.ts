import { MongoRepository, getMongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotificationSchema } from '@modules/notification/shared/models/schemas/INotificationSchema'
import { MongoNotificationSchema } from '@modules/notification/shared/infra/typeorm/mongodb/schemas/MongoNotificationSchema'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'

class MongoNotificationRepository implements INotificationRepository {
    private _repository: MongoRepository<INotificationSchema>

    constructor() {
        this._repository = getMongoRepository(MongoNotificationSchema, 'mongodb')
    }

    public async findOneById(notification_id: string): Promise<INotificationSchema | undefined> {
        return await this._repository.findOne({ _id: new ObjectID(notification_id) })
    }

    public async filterByOwnerId(owner_id: string): Promise<INotificationSchema[]> {
        return this._repository.find({ where: { owner_id } })
    }

    public async create(data: ICreateNotificationDTO): Promise<INotificationSchema> {
        const { owner_id, content } = data

        const notificationCreated = this._repository.create({ owner_id, content })

        await this._repository.save(notificationCreated)

        return notificationCreated
    }

    public async save(notification: INotificationSchema): Promise<INotificationSchema> {
        const currentDate = new Date()

        notification.updated_at = currentDate

        await this._repository.save(notification)

        return notification
    }

    public async markAsRead(notification: INotificationSchema): Promise<INotificationSchema> {
        notification.read = true

        await this._repository.save(notification)

        return notification
    }

    public async list(): Promise<INotificationSchema[]> {
        return await this._repository.find()
    }
}

export { MongoNotificationRepository }
