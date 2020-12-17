import { injectable, inject } from 'tsyringe'
import { format } from 'date-fns'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { ICreateEmotionDTO } from '@modules/emotion/shared/dtos/ICreateEmotionDTO'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'

class CreateEmotionService {
    constructor(
        @inject('EmotionRepository') private _emotionRepository: IEmotionRepository,
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

        const dateFortatted = format(new Date(), "dd/MM/yyyy 'at' HH:mm'h'")

        await this._notificationRepository.create({
            ownerId,
            content: `New appointment created in ${dateFortatted}`,
        })

        return createdEmotion
    }
}

export { CreateEmotionService }
