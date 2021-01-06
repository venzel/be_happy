import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { ShowEmotionService } from './ShowEmotionService'
import { generateStatus } from '@shared/helpers/status'

class ShowEmotionController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id, role } = req.auth

        const query_emotion_id = String(req.query.id)

        const service = container.resolve(ShowEmotionService)

        const emotion = await service.execute({ query_emotion_id, owner_id, role })

        const status = generateStatus(false, 200, 'Succesfully showed emotion!')

        const doc = classToClass(emotion)

        return res.status(200).json({ status, doc })
    }
}

export { ShowEmotionController }
