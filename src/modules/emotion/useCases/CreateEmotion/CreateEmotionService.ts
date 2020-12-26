import { injectable, inject } from 'tsyringe'
import { formatDate } from '@shared/libs/date'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'

@injectable()
class CreateEmotionService {
    constructor(
        @inject('EmotionRepository') private _emotionRepository: IEmotionRepository,
        @inject('EmotionReportRepository') private _emotionReportRepository: IEmotionReportRepository,
        @inject('NotificationRepository') private _notificationRepository: INotificationRepository
    ) {}

    public async execute(data: ICreateEmotionDTO): Promise<IEmotion> {
        const { emotion, description, owner_id } = data

        const createdEmotion = await this._emotionRepository.create({ emotion, description, owner_id })

        const emotion_id = createdEmotion.id

        await this._emotionReportRepository.create({ emotion_id, owner_id })

        const content = `New emotion created in ${formatDate(new Date())}`

        await this._notificationRepository.create({ owner_id, content })

        return createdEmotion
    }
}

export { CreateEmotionService }
