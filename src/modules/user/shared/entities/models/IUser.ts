interface IUser {
    id(): string
    name(): string
    email(): string
    password(): string
    role(): string
    avatar(): string
    allowed(): boolean
    actived(): boolean
    createdAt(): Date
    updateAt(): Date
    deletedAt(): Date | null
}

export { IUser }
