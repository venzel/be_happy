import { Request, Response, NextFunction } from 'express'
import { isIdValid } from '@shared/helpers/validator'
import { AppException } from '@shared/exceptions/AppException'

class DeleteEmotionValidator {
    public validRequestData(req: Request, _: Response, next: NextFunction): any {
        const query_emotion_id = req.query.id?.toString()

        if (!isIdValid(query_emotion_id, 'uuid')) {
            throw new AppException('Emotion id invalid!')
        }

        return next()
    }
}

export { DeleteEmotionValidator }
