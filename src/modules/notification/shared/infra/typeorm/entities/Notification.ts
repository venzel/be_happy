import { INotification } from '@modules/notification/shared/entities/INotification'

class Notification implements INotification {
    id: string
    ownerId: string
    content: string
    read: boolean
    createdAt: Date
    updatedAt: Date
}

export { Notification }
