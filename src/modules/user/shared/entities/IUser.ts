interface IUser {
    id: string
    name: string
    email: string
    password: string
    role: string
    avatar: string
    allowed: boolean
    activated: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export { IUser }
