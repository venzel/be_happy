interface INotification {
    id: string
    ownerId: string
    content: string
    read: boolean
    createdAt: Date
    updatedAt: Date
}

export { INotification }
