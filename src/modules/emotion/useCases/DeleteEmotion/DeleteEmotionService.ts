import { injectable, inject } from 'tsyringe'
import { formatDate } from '@shared/helpers/date'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { IDeleteEmotionDTO } from './IDeleteEmotionDTO'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class DeleteEmotionService {
    constructor(
        @inject('EmotionRepository') private _emotionRepository: IEmotionRepository,
        @inject('NotificationRepository') private _notificationRepository: INotificationRepository
    ) {}

    public async execute(data: IDeleteEmotionDTO): Promise<IEmotionEntity> {
        const { query_emotion_id, owner_id, role } = data

        const existsEmotion = await this._emotionRepository.findOneById(query_emotion_id)

        if (!existsEmotion) {
            throw new AppException('Emotion not exists!', 404)
        }

        if (role === 'USER' && owner_id !== existsEmotion.owner_id) {
            throw new AppException('It is not possible to delete another users emotion!', 403)
        }

        /* Data delete (update) in repository */

        await this._emotionRepository.delete(existsEmotion)

        /* Create notification */

        const content = `Emotion deleted in ${formatDate(new Date())}`

        await this._notificationRepository.create({ owner_id, content })

        /* Returns the emotion found */

        return existsEmotion
    }
}

export { DeleteEmotionService }
