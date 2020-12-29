import { Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'

class CreateEmotionValidator {
    public validate(req: Request, res: Response, next: NextFunction): any {
        const { type } = req.body

        // TODO: aqui
        if (!type) {
            throw new AppException('Emotion type invalid!', 400)
        }

        return next()
    }
}

export { CreateEmotionValidator }
