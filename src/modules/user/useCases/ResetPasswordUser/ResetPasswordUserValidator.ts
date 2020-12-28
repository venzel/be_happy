import { Request, Response, NextFunction } from 'express'
import { isPasswordValid, isUUIDValid } from '@shared/libs/regex'
import { AppException } from '@shared/exceptions/AppException'

class ResetPasswordUserValidator {
    public validate(req: Request, res: Response, next: NextFunction): any {
        const { new_password, token } = req.body

        if (!new_password || !isPasswordValid(new_password)) {
            throw new AppException('New password invalid!', 400)
        }

        if (!token || !isUUIDValid(token)) {
            throw new AppException('Token invalid invalid!', 400)
        }

        return next()
    }
}

export { ResetPasswordUserValidator }
