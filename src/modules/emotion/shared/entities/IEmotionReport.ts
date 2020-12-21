import { IEmotion } from './IEmotion'

interface IEmotionReport {
    id: string
    emotion_id: string
    emotion_owner: IEmotion
    owner_id: string
    read: boolean
    created_at: Date
    deleted_at: Date | null
}

export { IEmotionReport }
