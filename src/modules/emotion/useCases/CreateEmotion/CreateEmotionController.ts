import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { CreateEmotionService } from './CreateEmotionService'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'

class CreateEmotionController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { emotion, description } = req.body
        const { ownerId } = req.auth

        const emotionRepository = container.resolve<IEmotionRepository>('EmotionRepository')
        const emotionReportRepository = container.resolve<IEmotionReportRepository>(
            'EmotionReportRepository'
        )
        const notificationRepository = container.resolve<INotificationRepository>('EmotionRepository')

        const createEmotionService = new CreateEmotionService(
            emotionRepository,
            emotionReportRepository,
            notificationRepository
        )

        const emotionCreated: IEmotion = await createEmotionService.execute({
            ownerId,
            emotion,
            description,
        })

        const status = {
            error: false,
            code: 201,
            message: 'Succesfully created emotion!',
        }

        const data = classToClass(emotionCreated)

        return res.status(201).json({ status, data })
    }
}

export { CreateEmotionController }
