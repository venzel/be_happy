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
        const { ownerId, emotion, description: descriptionAlias } = data

        const description: string | null = descriptionAlias || null

        const createdEmotion: IEmotion = await this._emotionRepository.create({
            ownerId,
            emotion,
            description,
        })

        await this._emotionReportRepository.create({ emotionId: createdEmotion.id, ownerId })

        await this._notificationRepository.create({
            ownerId,
            content: `New emotion created in ${formatDate(new Date())}`,
        })

        return createdEmotion
    }
}

export { CreateEmotionService }
