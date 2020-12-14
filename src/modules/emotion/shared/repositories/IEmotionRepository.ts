import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { ICreateEmotionDTO } from '../dtos/ICreateEmotionDTO'

interface IEmotionRepository {
    findById(emotionId: string): Promise<IEmotion | undefined>
    create(data: ICreateEmotionDTO): Promise<IEmotion>
    save(emotion: IEmotion): Promise<IEmotion>
    delete(emotion: IEmotion): Promise<IEmotion>
    list(): Promise<IEmotion[]>
}

export { IEmotionRepository }
