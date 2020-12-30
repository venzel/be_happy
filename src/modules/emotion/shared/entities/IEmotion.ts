import { IUser } from '@modules/user/shared/models/entities/IUser'

interface IEmotion {
    id: string
    owner_id: string
    owner: IUser
    type: string
    description: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

export { IEmotion }
