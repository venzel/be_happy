import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { CreateEmotionService } from './CreateEmotionService'
import { generateStatus } from '@shared/libs/utils'

class CreateEmotionController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const { emotion, description } = req.body

        const createEmotionService = container.resolve(CreateEmotionService)

        // TODO: aqui
        const emotionType = await createEmotionService.execute({ emotion, description, owner_id })

        const status = generateStatus(false, 201, 'Succesfully created emotion!')

        const doc = classToClass(emotionType)

        return res.status(201).json({ status, doc })
    }
}

export { CreateEmotionController }
