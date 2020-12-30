import { IEmotionReport } from '../IEmotionReport'

class FakeEmotionReport implements IEmotionReport {
    public _id: string
    public emotion_id: string
    public emotion_owner: string
    public owner_id: string
    public read: boolean
    public created_at: Date
    public deleted_at: Date | null
}

export { FakeEmotionReport }
