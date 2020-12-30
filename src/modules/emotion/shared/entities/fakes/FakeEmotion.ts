import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IUser } from '@modules/user/shared/models/entities/IUser'

class FakeEmotion implements IEmotion {
    public id: string
    public owner_id: string
    public owner: IUser
    public type: string
    public description: string
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null
}

export { FakeEmotion }
