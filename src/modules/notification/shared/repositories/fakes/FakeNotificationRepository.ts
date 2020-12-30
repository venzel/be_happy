import { ObjectID } from 'mongodb'
import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotification } from '@modules/notification/shared/schemas/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { FakeNotification } from '../../schemas/fakes/FakeNotification'

class FakeNotificationRepository implements INotificationRepository {
    private _repository: INotification[]

    constructor() {
        this._repository = []
    }

    public async findOneById(notification_id: string): Promise<INotification | undefined> {
        return this._repository.find((data) => data._id === new ObjectID(notification_id))
    }

    public async create(data: ICreateNotificationDTO): Promise<INotification> {
        const { owner_id, content } = data

        const notificationFake = new FakeNotification()

        Object.assign(notificationFake, { _id: new ObjectID(), owner_id, content })

        this._repository.push(notificationFake)

        return notificationFake
    }

    public async save(notification: INotification): Promise<INotification> {
        const notificationIndex = this._repository.indexOf(notification)

        if (notificationIndex !== -1) {
            const currentDate = new Date()

            notification.updated_at = currentDate

            this._repository[notificationIndex] = notification
        }

        return notification
    }

    public async markAsRead(notification: INotification): Promise<INotification> {
        const notificationIndex = this._repository.indexOf(notification)

        if (notificationIndex !== -1) {
            const currentDate = new Date()

            notification.updated_at = currentDate
            notification.read = true

            this._repository[notificationIndex] = notification
        }

        return notification
    }

    public async list(): Promise<INotification[]> {
        return this._repository
    }
}

export { FakeNotificationRepository }
