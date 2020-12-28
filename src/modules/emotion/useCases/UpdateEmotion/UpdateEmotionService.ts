import { injectable, inject } from 'tsyringe'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { AppException } from '@shared/exceptions/AppException'
import { IUpdateEmotionDTO } from './IUpdateEmotionDTO'

@injectable()
class UpdateEmotionService {
    constructor(@inject('EmotionRepository') private _emotionRepository: IEmotionRepository) {}

    public async execute(data: IUpdateEmotionDTO): Promise<IEmotion> {
        const { emotion_id, description } = data

        const existsEmotionWithId = await this._emotionRepository.findOneById(emotion_id)

        if (!existsEmotionWithId) {
            throw new AppException('Emotion not found!', 404)
        }

        /* Data update */

        existsEmotionWithId.description = description

        /* End Data update */

        const savedEmotion = await this._emotionRepository.save(existsEmotionWithId)

        return savedEmotion
    }
}

export { UpdateEmotionService }
