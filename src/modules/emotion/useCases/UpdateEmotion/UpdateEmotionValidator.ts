import { Request, Response, NextFunction } from 'express'
import { isIdValid } from '@shared/helpers/validator'
import { AppException } from '@shared/exceptions/AppException'

class UpdateEmotionValidator {
    public validRequestData(req: Request, _: Response, next: NextFunction): any {
        const { emotion_id, description } = req.body

        if (!isIdValid(emotion_id, 'uuid')) {
            throw new AppException('Emotion id invalid!', 400)
        }

        if (!description || description.length < 5 || description.length > 255) {
            throw new AppException('Emotion description invalid!', 400)
        }

        return next()
    }
}

export { UpdateEmotionValidator }
