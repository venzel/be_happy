import { Request, Response, NextFunction } from 'express'
import { isEmailValid } from '@shared/libs/regex'
import { AppException } from '@shared/exceptions/AppException'

class ForgotPasswordUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { email } = req.body

        if (!email || !isEmailValid(email)) throw new AppException('Email invalid!', 400)

        return next()
    }
}

export { ForgotPasswordUserValidator }
