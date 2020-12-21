import { IUser } from '@modules/user/shared/entities/IUser'

interface IEmotion {
    id: string
    owner_id: string
    owner: IUser
    emotion: string
    description: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

export { IEmotion }
