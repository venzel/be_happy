import { ICreateEmotionReportDTO } from '../dtos/ICreateEmotionReportDTO'
import { IEmotionReportSchema } from '../models/schemas/IEmotionReportSchema'

interface IEmotionReportRepository {
    filterByOwnerId(owner_id: string): Promise<IEmotionReportSchema[]>

    create(data: ICreateEmotionReportDTO): Promise<IEmotionReportSchema>

    save(emotion_report: IEmotionReportSchema): Promise<IEmotionReportSchema>

    delete(emotion_report: IEmotionReportSchema): Promise<IEmotionReportSchema>

    list(): Promise<IEmotionReportSchema[]>
}

export { IEmotionReportRepository }
