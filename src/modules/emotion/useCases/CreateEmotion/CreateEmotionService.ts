import { injectable, inject } from 'tsyringe'
import { formatDate } from '@shared/libs/DateFn'
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
        const { owner_id, emotion, description } = data

        const createdEmotion: IEmotion = await this._emotionRepository.create({
            owner_id,
            emotion,
            description,
        })

        await this._emotionReportRepository.create({ emotion_id: createdEmotion.id, owner_id })

        await this._notificationRepository.create({
            owner_id,
            content: `New emotion created in ${formatDate(new Date())}`,
        })

        return createdEmotion
    }
}

export { CreateEmotionService }
