import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionReport } from '@modules/emotion/shared/entities/IEmotionReport'

class FakeEmotionReport implements IEmotionReport {
    public id: string
    public emotion_id: string
    public emotion_owner: IEmotion
    public owner_id: string
    public read: boolean
    public created_at: Date
    public deleted_at: Date | null
}

export { FakeEmotionReport }
