import { ICreateNotificationDTO } from '@modules/notification/shared/dtos/ICreateNotificationDTO'
import { INotification } from '@modules/notification/shared/entities/INotification'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { NotificationFake } from '../../fakes/entities/NotificationFake'

class NotificationRepository implements INotificationRepository {
    private _repository: INotification[]

    constructor() {
        this._repository = []
    }

    public async findById(notificationId: string): Promise<INotification | undefined> {
        return undefined
    }

    public async create(data: ICreateNotificationDTO): Promise<INotification> {
        throw new Error('Method not implemented.')
    }
}

export { NotificationRepository }
