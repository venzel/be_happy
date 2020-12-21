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
        const { description } = data

        const existsEmotion: IEmotion | undefined = await this._emotionRepository.findOneById(
            'falta!!!!'
        )

        if (!existsEmotion) throw new AppException('Emotion not found!', 404)

        existsEmotion.description = description

        await this._emotionRepository.save(existsEmotion)

        return existsEmotion
    }
}

export { UpdateEmotionService }
