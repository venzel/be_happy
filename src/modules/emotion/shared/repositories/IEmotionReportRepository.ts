import { ICreateEmotionReportDTO } from '../dtos/ICreateEmotionReportDTO'
import { IEmotionReport } from '../schemas/IEmotionReport'

interface IEmotionReportRepository {
    filterByOwnerId(owner_id: string): Promise<IEmotionReport[]>

    create(data: ICreateEmotionReportDTO): Promise<IEmotionReport>

    save(emotion_report: IEmotionReport): Promise<IEmotionReport>

    delete(emotion_report: IEmotionReport): Promise<IEmotionReport>

    list(): Promise<IEmotionReport[]>
}

export { IEmotionReportRepository }
