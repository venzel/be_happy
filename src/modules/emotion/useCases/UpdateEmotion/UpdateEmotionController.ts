import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'

class UpdateEmotionController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { ownerId, role } = req.auth

        const { emotionId, description } = req.body

        const emotionRepository = container.resolve<IEmotionRepository>('EmotionRepository')

        return res.status(200).json({ ok: true })
    }
}

export { UpdateEmotionController }