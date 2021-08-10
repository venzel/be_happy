import { injectable, inject } from 'tsyringe'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { IShowEmotionDTO } from './IShowEmotionDTO'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ShowEmotionService {
    constructor(@inject('EmotionRepository') private _emotionRepository: IEmotionRepository) {}

    public async execute(data: IShowEmotionDTO): Promise<IEmotionEntity> {
        const { query_emotion_id, owner_id, role } = data

        const existsEmotion = await this._emotionRepository.findOneById(query_emotion_id)

        if (!existsEmotion) {
            throw new AppException('Emotion not exists!', 404)
        }

        if (role === 'USER' && owner_id !== existsEmotion.owner_id) {
            throw new AppException('It is not possible to show another users emotion!', 403)
        }

        return existsEmotion
    }
}

export { ShowEmotionService }
