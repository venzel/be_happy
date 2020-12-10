interface ITokenUser {
    id(): string
    ownerId(): string
    token(): string
    createdAt(): Date
    updatedAt(): Date
    deletedAt(): Date | null
}

export { ITokenUser }
