import { ICreateNotificationDTO } from '../dtos/ICreateNotificationDTO'
import { INotificationSchema } from '../models/schemas/INotificationSchema'

interface INotificationRepository {
    findOneById(notification_id: string): Promise<INotificationSchema | undefined>

    filterByOwnerId(owner_id: string): Promise<INotificationSchema[]>

    create(data: ICreateNotificationDTO): Promise<INotificationSchema>

    save(notification: INotificationSchema): Promise<INotificationSchema>

    markAsRead(notification: INotificationSchema): Promise<INotificationSchema>

    list(): Promise<INotificationSchema[]>
}

export { INotificationRepository }
