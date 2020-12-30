import { ObjectID } from 'mongodb'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotificationSchema } from '@modules/notification/shared/models/schemas/INotificationSchema'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { FakeNotificationSchema } from '../../models/schemas/fakes/FakeNotificationSchema'

class FakeNotificationRepository implements INotificationRepository {
    private _repository: INotificationSchema[]

    constructor() {
        this._repository = []
    }

    public async findOneById(notification_id: string): Promise<INotificationSchema | undefined> {
        return this._repository.find((data) => data._id === new ObjectID(notification_id))
    }

    public async create(data: ICreateNotificationDTO): Promise<INotificationSchema> {
        const { owner_id, content } = data

        const notificationFake = new FakeNotificationSchema()

        Object.assign(notificationFake, { _id: new ObjectID(), owner_id, content })

        this._repository.push(notificationFake)

        return notificationFake
    }

    public async save(notification: INotificationSchema): Promise<INotificationSchema> {
        const notificationIndex = this._repository.indexOf(notification)

        if (notificationIndex !== -1) {
            const currentDate = new Date()

            notification.updated_at = currentDate

            this._repository[notificationIndex] = notification
        }

        return notification
    }

    public async markAsRead(notification: INotificationSchema): Promise<INotificationSchema> {
        const notificationIndex = this._repository.indexOf(notification)

        if (notificationIndex !== -1) {
            const currentDate = new Date()

            notification.updated_at = currentDate
            notification.read = true

            this._repository[notificationIndex] = notification
        }

        return notification
    }

    public async list(): Promise<INotificationSchema[]> {
        return this._repository
    }
}

export { FakeNotificationRepository }
