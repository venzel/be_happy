import { INotification } from '@modules/notification/shared/entities/INotification'

class FakeNotification implements INotification {
    public _id: any
    public owner_id: string
    public content: string
    public read: boolean
    public created_at: Date
    public updated_at: Date
}

export { FakeNotification }
