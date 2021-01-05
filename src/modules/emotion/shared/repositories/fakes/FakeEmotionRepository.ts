import { v4 as uuid } from 'uuid'
import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { FakeEmotionEntity } from '../../models/entities/fakes/FakeEmotionEntity'

class FakeEmotionRepository implements IEmotionRepository {
    private _repository: IEmotionEntity[]

    constructor() {
        this._repository = []
    }

    public async findOneById(emotion_id: string): Promise<IEmotionEntity | undefined> {
        return this._repository.find((data) => data.id === emotion_id)
    }

    public async filterByOwnerId(owner_id: string): Promise<IEmotionEntity[]> {
        return this._repository.filter((data) => data.owner_id === owner_id)
    }

    public async create(data: ICreateEmotionDTO): Promise<IEmotionEntity> {
        const { owner_id, type, description } = data

        const emotionFake = new FakeEmotionEntity()

        const id = uuid()

        Object.assign(emotionFake, { id, owner_id, type, description })

        this._repository.push(emotionFake)

        return emotionFake
    }

    public async save(emotion: IEmotionEntity): Promise<IEmotionEntity> {
        const emotionIndex: number = this._repository.indexOf(emotion)

        if (emotionIndex !== -1) {
            this._repository[emotionIndex] = emotion
        }

        return emotion
    }

    public async delete(emotion: IEmotionEntity): Promise<IEmotionEntity> {
        const emotionIndex: number = this._repository.indexOf(emotion)

        if (emotionIndex !== -1) {
            const currentDate = new Date()

            emotion.updated_at = currentDate
            emotion.deleted_at = currentDate

            this._repository[emotionIndex] = emotion
        }

        return emotion
    }

    public async list(): Promise<IEmotionEntity[]> {
        return this._repository
    }
}

export { FakeEmotionRepository }
