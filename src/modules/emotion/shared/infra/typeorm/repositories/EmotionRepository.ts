import { getRepository, Repository } from 'typeorm'
import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { Emotion } from '../entities/Emotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'

class EmotionRepository implements IEmotionRepository {
    private _repository: Repository<IEmotion>

    constructor() {
        this._repository = getRepository(Emotion, 'default')
    }

    public async findOneById(emotionId: string): Promise<IEmotion | undefined> {
        return await this._repository.findOne({ where: { id: emotionId, deletedAt: null } })
    }

    public async create(data: ICreateEmotionDTO): Promise<IEmotion> {
        const { owner_id, emotion, description } = data

        const emotionCreated = this._repository.create({ owner_id, emotion, description })

        await this._repository.save(emotionCreated)

        return emotionCreated
    }

    public async save(emotion: IEmotion): Promise<IEmotion> {
        const currentDate = new Date()

        emotion.updated_at = currentDate

        await this._repository.save(emotion)

        return emotion
    }

    public async delete(emotion: IEmotion): Promise<IEmotion> {
        const currentDate = new Date()

        emotion.deleted_at = currentDate

        await this.save(emotion)

        return emotion
    }

    public async list(): Promise<IEmotion[]> {
        return await this._repository.find()
    }
}

export { EmotionRepository }
