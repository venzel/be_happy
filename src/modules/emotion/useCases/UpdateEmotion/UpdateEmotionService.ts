import { injectable, inject } from 'tsyringe'
import { formatDate } from '@shared/helpers/date'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { IUpdateEmotionDTO } from './IUpdateEmotionDTO'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class UpdateEmotionService {
    constructor(
        @inject('EmotionRepository') private _emotionRepository: IEmotionRepository,
        @inject('NotificationRepository') private _notificationRepository: INotificationRepository
    ) {}

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

        /* Data saved in repository */

        await this._emotionRepository.save(existsEmotion)

        /* Create notification */

        const content = `Emotion updated in ${formatDate(new Date())}`

        await this._notificationRepository.create({ owner_id, content })

        /* Returns the emotion found */

        return existsEmotion
    }
}

export { UpdateEmotionService }
