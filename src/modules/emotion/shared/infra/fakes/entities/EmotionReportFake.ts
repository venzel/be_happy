import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionReport } from '@modules/emotion/shared/entities/IEmotionReport'

class EmotionReportFake implements IEmotionReport {
    public id: string
    public emotionId: string
    public emotionOwner: IEmotion
    public ownerId: string
    public read: boolean
    public createdAt: Date
    public deletedAt: Date | null
}

export { EmotionReportFake }
