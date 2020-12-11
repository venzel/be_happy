interface IUserToken {
    id: string
    ownerId: string
    token: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export { IUserToken }
