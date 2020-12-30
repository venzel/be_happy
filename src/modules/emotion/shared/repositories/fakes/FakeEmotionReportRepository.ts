import { v4 as uuid } from 'uuid'
import { ICreateEmotionReportDTO } from '@modules/emotion/shared/dtos/ICreateEmotionReportDTO'
import { IEmotionReportSchema } from '@modules/emotion/shared/models/schemas/IEmotionReportSchema'
import { MongoEmotionReportSchema } from '../../infra/typeorm/mongodb/schemas/MongoEmotionReportSchema'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'

class FakeEmotionReportRepository implements IEmotionReportRepository {
    private _repository: IEmotionReportSchema[]

    constructor() {
        this._repository = []
    }

    public async filterByOwnerId(owner_id: string): Promise<IEmotionReportSchema[]> {
        return this._repository.filter((data) => data.owner_id === owner_id)
    }

    public async create(data: ICreateEmotionReportDTO): Promise<IEmotionReportSchema> {
        const { emotion_id, owner_id } = data

        // TODO: akii
        const emotionReport: IEmotionReportSchema = new MongoEmotionReportSchema()

        const id = uuid()

        Object.assign(emotionReport, { id, emotion_id, owner_id })

        this._repository.push(emotionReport)

        return emotionReport
    }

    public async save(emotion_report: IEmotionReportSchema): Promise<IEmotionReportSchema> {
        const emotionReportIndex: number = this._repository.indexOf(emotion_report)

        if (emotionReportIndex !== -1) {
            this._repository[emotionReportIndex] = emotion_report
        }

        return emotion_report
    }

    public async delete(emotion_report: IEmotionReportSchema): Promise<IEmotionReportSchema> {
        const emotionReportIndex: number = this._repository.indexOf(emotion_report)

        if (emotionReportIndex !== -1) {
            const currentDate = new Date()

            emotion_report.deleted_at = currentDate

            this._repository[emotionReportIndex] = emotion_report
        }

        return emotion_report
    }

    public async list(): Promise<IEmotionReportSchema[]> {
        return this._repository
    }
}

export { FakeEmotionReportRepository }
