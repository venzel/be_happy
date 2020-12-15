import { Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'
import { isUUIDValid } from '@shared/libs/RegEx'

class CreateEmotionValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { ownerId, emotion, description } = req.body

        if (!ownerId || !isUUIDValid(ownerId)) {
            throw new AppException('User id invalid!', 400)
        }

        if (!emotion) {
            throw new AppException('Emotion type invalid!', 400)
        }

        return next()
    }
}

export { CreateEmotionValidator }
