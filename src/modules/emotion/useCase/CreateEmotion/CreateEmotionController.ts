import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { CreateEmotionService } from './CreateEmotionService'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'

class CreateEmotionController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { ownerId, emotion, description } = req.body

        const emotionRepository = container.resolve<IEmotionRepository>('EmotionRepository')
        const notificationRepository = container.resolve<INotificationRepository>('EmotionRepository')

        const createEmotionService = new CreateEmotionService(emotionRepository, notificationRepository)

        const emotionCreated: IEmotion = await createEmotionService.execute({
            ownerId,
            emotion,
            description,
        })

        return res.status(201).json(classToClass(emotionCreated))
    }
}

export { CreateEmotionController }
