import { IEmotionReportSchema } from '../IEmotionReportSchema'

class FakeEmotionReportSchema implements IEmotionReportSchema {
    public _id: string
    public emotion_id: string
    public emotion_owner: string
    public owner_id: string
    public read: boolean
    public created_at: Date
    public deleted_at: Date | null
}

export { FakeEmotionReportSchema }
