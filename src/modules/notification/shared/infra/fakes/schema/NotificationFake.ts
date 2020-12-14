import { INotification } from '@modules/notification/shared/entities/INotification'

class NotificationFake implements INotification {
    _id: any
    ownerId: string
    content: string
    read: boolean
    createdAt: Date
    updatedAt: Date
}

export { NotificationFake }
