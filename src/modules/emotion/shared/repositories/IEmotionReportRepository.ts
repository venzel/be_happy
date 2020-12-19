import { ICreateEmotionReportDTO } from '../dtos/ICreateEmotionReportDTO'
import { IEmotion } from '../entities/IEmotion'
import { IEmotionReport } from '../entities/IEmotionReport'

interface IEmotionReportRepository {
    filterByOwnerId(ownerId: string): Promise<IEmotionReport[]>

    create(data: ICreateEmotionReportDTO): Promise<IEmotionReport>

    save(emotionReport: IEmotionReport): Promise<IEmotionReport>

    delete(emotionReport: IEmotionReport): Promise<IEmotionReport>

    list(): Promise<IEmotionReport[]>
}

export { IEmotionReportRepository }
