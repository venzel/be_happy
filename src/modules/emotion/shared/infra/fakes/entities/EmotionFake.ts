import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IUser } from '@modules/user/shared/entities/IUser'

class EmotionFake implements IEmotion {
    public id: string
    public ownerId: string
    public owner: IUser
    public emotion: string
    public description: string | null
    public createdAt: Date
    public updatedAt: Date
    public deletedAt: Date | null
}

export { EmotionFake }
