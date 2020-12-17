import { Request, Response, NextFunction } from 'express'
import { isEmailValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class AuthenticateUserValidator {
    public validate(req: Request, res: Response, next: NextFunction): any {
        const { email, password } = req.body

        if (!email || !isEmailValid(email)) {
            throw new AppException('Email invalid!', 403)
        }

        if (!password) {
            throw new AppException('Password invalid!', 403)
        }

        return next()
    }
}

export { AuthenticateUserValidator }
