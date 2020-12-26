import { v4 as uuid } from 'uuid'
import { ICreateEmotionReportDTO } from '@modules/emotion/shared/dtos/ICreateEmotionReportDTO'
import { IEmotionReport } from '@modules/emotion/shared/entities/IEmotionReport'
import { PostgresEmotionReport } from '../../typeorm/entities/PostgresEmotionReport'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'

class FakeEmotionReportRepository implements IEmotionReportRepository {
    private _repository: IEmotionReport[]

    constructor() {
        this._repository = []
    }

    public async filterByOwnerId(owner_id: string): Promise<IEmotionReport[]> {
        return this._repository.filter((data) => data.owner_id === owner_id)
    }

    public async create(data: ICreateEmotionReportDTO): Promise<IEmotionReport> {
        const { emotion_id, owner_id } = data

        const emotionReport: IEmotionReport = new PostgresEmotionReport()

        Object.assign(emotionReport, { id: uuid(), emotion_id, owner_id })

        this._repository.push(emotionReport)

        return emotionReport
    }

    public async save(emotion_report: IEmotionReport): Promise<IEmotionReport> {
        const emotionReportIndex: number = this._repository.indexOf(emotion_report)

        if (emotionReportIndex !== -1) {
            this._repository[emotionReportIndex] = emotion_report
        }

        return emotion_report
    }

    public async delete(emotion_report: IEmotionReport): Promise<IEmotionReport> {
        const emotionReportIndex: number = this._repository.indexOf(emotion_report)

        if (emotionReportIndex !== -1) {
            const currentDate = new Date()

            emotion_report.deleted_at = currentDate

            this._repository[emotionReportIndex] = emotion_report
        }

        return emotion_report
    }

    public async list(): Promise<IEmotionReport[]> {
        return this._repository
    }
}

export { FakeEmotionReportRepository }
