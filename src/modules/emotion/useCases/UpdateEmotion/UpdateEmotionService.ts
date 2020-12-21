import { injectable, inject } from 'tsyringe'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { IUpdateEmotionDTO } from '@modules/emotion/shared/dtos/IUpdateEmotionDTO'
import { AppException } from '@shared/exceptions/AppException'
import { exists } from 'fs'

@injectable()
class UpdateEmotionService {
    constructor(@inject('emotionRepository') private _emotionRepository: IEmotionRepository) {}

    public async execute(data: IUpdateEmotionDTO): Promise<IEmotion> {
        const { emotion_id, description } = data

        const existsEmotionWithId: IEmotion | undefined = await this._emotionRepository.findOneById(
            emotion_id
        )

        if (!existsEmotionWithId) throw new AppException('Emotion not found!', 404)

        existsEmotionWithId.description = description

        const emotionSaved: IEmotion = await this._emotionRepository.save(existsEmotionWithId)

        return emotionSaved
    }
}

export { UpdateEmotionService }
