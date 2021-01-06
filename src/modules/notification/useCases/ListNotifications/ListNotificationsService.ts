import { injectable, inject } from 'tsyringe'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { IListNotificationsDTO } from './IListNotificationsDTO'
import { INotificationSchema } from '@modules/notification/shared/models/schemas/INotificationSchema'

@injectable()
class ListNotificationsService {
    constructor(
        @inject('NotificationRepository') private _notificationRepository: INotificationRepository
    ) {}

    public async execute(data: IListNotificationsDTO): Promise<INotificationSchema[]> {
        const { query_user_id, owner_id, role } = data

        let notifications: INotificationSchema[] = []

        if (role === 'ADMIN') {
            if (!query_user_id) {
                notifications = await this._notificationRepository.list()
            } else {
                notifications = await this._notificationRepository.filterByOwnerId(query_user_id)
            }
        } else {
            notifications = await this._notificationRepository.filterByOwnerId(owner_id)
        }

        return notifications
    }
}

export { ListNotificationsService }
