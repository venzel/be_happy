import { IUserEntity } from '@modules/user/shared/models/entities/IUserEntity'

interface IEmotionEntity {
    id: string
    owner_id: string
    owner: IUserEntity
    type: string
    description: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

export { IEmotionEntity }
