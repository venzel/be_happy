import { Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'

class CreateEmotionValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { emotion } = req.body

        if (!emotion) throw new AppException('Emotion invalid!', 400)

        return next()
    }
}

export { CreateEmotionValidator }
