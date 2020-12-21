import { v4 as uuid } from 'uuid'
import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { EmotionFake } from '../entities/EmotionFake'

class EmotionRepositoryFake implements IEmotionRepository {
    private _repository: IEmotion[]

    constructor() {
        this._repository = []
    }

    public async findOneById(emotionId: string): Promise<IEmotion | undefined> {
        return this._repository.find((emotion) => emotion.id === emotionId)
    }

    public async create(data: ICreateEmotionDTO): Promise<IEmotion> {
        const { owner_id, emotion, description } = data

        const emotionFake = new EmotionFake()

        Object.assign(emotionFake, { id: uuid(), owner_id, emotion, description })

        this._repository.push(emotionFake)

        return emotionFake
    }

    public async save(emotion: IEmotion): Promise<IEmotion> {
        const emotionIndex: number = this._repository.indexOf(emotion)

        if (emotionIndex !== -1) {
            this._repository[emotionIndex] = emotion
        }

        return emotion
    }

    public async delete(emotion: IEmotion): Promise<IEmotion> {
        const emotionIndex: number = this._repository.indexOf(emotion)

        if (emotionIndex !== -1) {
            const currentDate = new Date()

            emotion.updated_at = currentDate
            emotion.deleted_at = currentDate

            this._repository[emotionIndex] = emotion
        }

        return emotion
    }

    public async list(): Promise<IEmotion[]> {
        return this._repository
    }
}

export { EmotionRepositoryFake }
