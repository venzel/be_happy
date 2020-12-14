interface INotification {
    _id: any
    ownerId: string
    content: string
    read: boolean
    createdAt: Date
    updatedAt: Date
}

export { INotification }
