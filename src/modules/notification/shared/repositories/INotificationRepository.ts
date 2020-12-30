import { ICreateNotificationDTO } from '../dtos/ICreateNotificationDTO'
import { INotification } from '../models/schemas/INotification'

interface INotificationRepository {
    findOneById(notification_id: string): Promise<INotification | undefined>

    create(data: ICreateNotificationDTO): Promise<INotification>

    save(notification: INotification): Promise<INotification>

    markAsRead(notification: INotification): Promise<INotification>

    list(): Promise<INotification[]>
}

export { INotificationRepository }
