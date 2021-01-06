import { getRepository, Repository } from 'typeorm'
import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { PostgresEmotionEntity } from '../entities/PostgresEmotionEntity'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'

class PostgresEmotionRepository implements IEmotionRepository {
    private _repository: Repository<IEmotionEntity>

    constructor() {
        this._repository = getRepository(PostgresEmotionEntity, 'default')
    }

    public async findOneById(emotionId: string): Promise<IEmotionEntity | undefined> {
        return await this._repository.findOne({ where: { id: emotionId, deleted_at: null } })
    }

    public async filterByOwnerId(owner_id: string): Promise<IEmotionEntity[]> {
        return this._repository.find({ where: { owner_id } })
    }

    public async create(data: ICreateEmotionDTO): Promise<IEmotionEntity> {
        const { emotion_id: id, owner_id, type, description } = data

        const emotionCreated = this._repository.create({ id, owner_id, type, description })

        await this._repository.save(emotionCreated)

        return emotionCreated
    }

    public async save(emotion: IEmotionEntity): Promise<IEmotionEntity> {
        const currentDate = new Date()

        emotion.updated_at = currentDate

        await this._repository.save(emotion)

        return emotion
    }

    public async delete(emotion: IEmotionEntity): Promise<IEmotionEntity> {
        const currentDate = new Date()

        emotion.deleted_at = currentDate

        await this.save(emotion)

        return emotion
    }

    public async list(): Promise<IEmotionEntity[]> {
        return await this._repository.find()
    }
}

export { PostgresEmotionRepository }
