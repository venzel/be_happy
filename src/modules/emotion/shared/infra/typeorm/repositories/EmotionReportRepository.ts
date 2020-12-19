import { MongoRepository, getMongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'
import { IEmotionReport } from '@modules/emotion/shared/entities/IEmotionReport'
import { EmotionReport } from '../entities/EmotionReport'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { ICreateEmotionReportDTO } from '@modules/emotion/shared/dtos/ICreateEmotionReportDTO'

class EmotionReportRepository implements IEmotionReportRepository {
    private _repository: MongoRepository<IEmotionReport>

    constructor() {
        this._repository = getMongoRepository(EmotionReport, 'mongo')
    }

    public async filterByOwnerId(ownerId: string): Promise<IEmotionReport[]> {
        return await this._repository.find({ ownerId, deletedAt: null })
    }

    public async create(data: ICreateEmotionReportDTO): Promise<IEmotionReport> {
        const { emotionId, ownerId } = data

        const emotionReportCreated = this._repository.create({ emotionId, ownerId })

        await this._repository.save(emotionReportCreated)

        return emotionReportCreated
    }

    public async save(emotionReport: IEmotionReport): Promise<IEmotionReport> {
        await this._repository.save(emotionReport)

        return emotionReport
    }

    public async delete(emotionReport: IEmotionReport): Promise<IEmotionReport> {
        const currentDate = new Date()

        emotionReport.deletedAt = currentDate

        await this._repository.save(emotionReport)

        return emotionReport
    }

    public async list(): Promise<IEmotionReport[]> {
        return this._repository.find()
    }
}

export { EmotionReportRepository }
