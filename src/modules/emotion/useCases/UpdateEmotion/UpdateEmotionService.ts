import { injectable, inject } from 'tsyringe'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { AppException } from '@shared/exceptions/AppException'
import { IUpdateEmotionDTO } from './IUpdateEmotionDTO'

@injectable()
class UpdateEmotionService {
    constructor(@inject('EmotionRepository') private _emotionRepository: IEmotionRepository) {}

    public async execute(data: IUpdateEmotionDTO): Promise<IEmotionEntity> {
        const { emotion_id, description, owner_id } = data

        const existsEmotion = await this._emotionRepository.findOneById(emotion_id)

        if (!existsEmotion) {
            throw new AppException('Emotion not found!', 404)
        }

        if (owner_id !== existsEmotion.owner_id) {
            throw new AppException('It is not possible to update another users emotion!', 403)
        }

        /* Data update */

        existsEmotion.description = description

        /* End Data update */

        await this._emotionRepository.save(existsEmotion)

        return existsEmotion
    }
}

export { UpdateEmotionService }
