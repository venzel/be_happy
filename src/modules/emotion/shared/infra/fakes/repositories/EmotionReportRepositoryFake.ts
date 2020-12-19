import { v4 as uuid } from 'uuid'
import { ICreateEmotionReportDTO } from '@modules/emotion/shared/dtos/ICreateEmotionReportDTO'
import { IEmotionReport } from '@modules/emotion/shared/entities/IEmotionReport'
import { EmotionReport } from '../../typeorm/entities/EmotionReport'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'

class EmotionReportRepositoryFake implements IEmotionReportRepository {
    private _repository: IEmotionReport[]

    constructor() {
        this._repository = []
    }

    public async filterByOwnerId(ownerId: string): Promise<IEmotionReport[]> {
        return this._repository.filter((data) => data.ownerId === ownerId)
    }

    public async create(data: ICreateEmotionReportDTO): Promise<IEmotionReport> {
        const { emotionId, ownerId } = data

        const emotionReport: IEmotionReport = new EmotionReport()

        Object.assign(emotionReport, { id: uuid(), emotionId, ownerId })

        this._repository.push(emotionReport)

        return emotionReport
    }

    public async save(emotionReport: IEmotionReport): Promise<IEmotionReport> {
        const emotionReportIndex: number = this._repository.indexOf(emotionReport)

        if (emotionReportIndex !== -1) {
            this._repository[emotionReportIndex] = emotionReport
        }

        return emotionReport
    }

    public async delete(emotionReport: IEmotionReport): Promise<IEmotionReport> {
        const emotionReportIndex: number = this._repository.indexOf(emotionReport)

        if (emotionReportIndex !== -1) {
            const currentDate = new Date()

            emotionReport.deletedAt = currentDate

            this._repository[emotionReportIndex] = emotionReport
        }

        return emotionReport
    }

    public async list(): Promise<IEmotionReport[]> {
        return this._repository
    }
}

export { EmotionReportRepositoryFake }
