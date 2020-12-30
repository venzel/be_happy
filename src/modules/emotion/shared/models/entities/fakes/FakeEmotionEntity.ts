import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { IUserEntity } from '@modules/user/shared/models/entities/IUserEntity'

class FakeEmotionEntity implements IEmotionEntity {
    public id: string
    public owner_id: string
    public owner: IUserEntity
    public type: string
    public description: string
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null
}

export { FakeEmotionEntity }
