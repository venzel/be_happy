import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IUser } from '@modules/user/shared/entities/IUser'

class Emotion implements IEmotion {
    id: string
    ownerId: string
    owner: IUser
    emotion: string
    description: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export { Emotion }
