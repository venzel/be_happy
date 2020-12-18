import { IUser } from '@modules/user/shared/entities/IUser'

interface IEmotion {
    id: string
    ownerId: string
    owner: IUser
    emotion: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export { IEmotion }
