import { INotification } from '@modules/notification/shared/entities/INotification'

class NotificationFake implements INotification {
    public _id: any
    public owner_id: string
    public content: string
    public read: boolean
    public createdAt: Date
    public updatedAt: Date
}

export { NotificationFake }
