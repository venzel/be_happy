import { IUser } from '@modules/user/shared/entities/IUser'

class User implements IUser {
    id: string
    name: string
    email: string
    password: string
    role: string
    avatar: string
    allowed: boolean
    activeted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export { User }
