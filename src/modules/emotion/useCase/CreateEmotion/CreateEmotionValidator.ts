import { Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'
import { isUUIDValid } from '@shared/libs/RegEx'

class CreateEmotionValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const emotion: string | undefined = req.body.emotion

        if (!emotion) {
            throw new AppException('Emotion invalid!', 400)
        }

        return next()
    }
}

export { CreateEmotionValidator }
