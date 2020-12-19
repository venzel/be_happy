import { IEmotion } from './IEmotion'

interface IEmotionReport {
    id: string
    emotionId: string
    emotionOwner: IEmotion
    ownerId: string
    read: boolean
    createdAt: Date
    deletedAt: Date | null
}

export { IEmotionReport }
