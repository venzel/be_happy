import { INotificationSchema } from '@modules/notification/shared/models/schemas/INotificationSchema'

class FakeNotificationSchema implements INotificationSchema {
    public _id: any
    public owner_id: string
    public content: string
    public read: boolean
    public created_at: Date
    public updated_at: Date
}

export { FakeNotificationSchema }
