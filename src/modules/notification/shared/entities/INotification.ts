interface INotification {
    _id: any
    owner_id: string
    content: string
    read: boolean
    created_at: Date
    updated_at: Date
}

export { INotification }
