import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'

class EmotionRepository implements IEmotionRepository {
    private _repository: IEmotion[]

    constructor() {
        this._repository = []
    }

    public async findById(emotionId: string): Promise<IEmotion | undefined> {
        throw new Error('Method not implemented.')
    }

    public async create(data: ICreateEmotionDTO): Promise<IEmotion> {
        throw new Error('Method not implemented.')
    }

    public async save(emotion: IEmotion): Promise<IEmotion> {
        throw new Error('Method not implemented.')
    }

    public async delete(emotion: IEmotion): Promise<IEmotion> {
        throw new Error('Method not implemented.')
    }

    public async repository(): Promise<IEmotion[]> {
        throw new Error('Method not implemented.')
    }
}

export { EmotionRepository }
