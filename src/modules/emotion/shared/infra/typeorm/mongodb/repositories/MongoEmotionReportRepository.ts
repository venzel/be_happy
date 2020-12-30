import { MongoRepository, getMongoRepository } from 'typeorm'
import { IEmotionReportSchema } from '@modules/emotion/shared/models/schemas/IEmotionReportSchema'
import { MongoEmotionReportSchema } from '../schemas/MongoEmotionReportSchema'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { ICreateEmotionReportDTO } from '@modules/emotion/shared/dtos/ICreateEmotionReportDTO'

class MongoEmotionReportRepository implements IEmotionReportRepository {
    private _repository: MongoRepository<IEmotionReportSchema>

    constructor() {
        this._repository = getMongoRepository(MongoEmotionReportSchema, 'mongodb')
    }

    public async filterByOwnerId(owner_id: string): Promise<IEmotionReportSchema[]> {
        return await this._repository.find({ owner_id, deleted_at: null })
    }

    public async create(data: ICreateEmotionReportDTO): Promise<IEmotionReportSchema> {
        const { emotion_id, owner_id } = data

        const emotionReportCreated = this._repository.create({ emotion_id, owner_id })

        await this._repository.save(emotionReportCreated)

        return emotionReportCreated
    }

    public async save(emotionReport: IEmotionReportSchema): Promise<IEmotionReportSchema> {
        await this._repository.save(emotionReport)

        return emotionReport
    }

    public async delete(emotionReport: IEmotionReportSchema): Promise<IEmotionReportSchema> {
        const currentDate = new Date()

        emotionReport.deleted_at = currentDate

        await this._repository.save(emotionReport)

        return emotionReport
    }

    public async list(): Promise<IEmotionReportSchema[]> {
        return this._repository.find()
    }
}

export { MongoEmotionReportRepository }
