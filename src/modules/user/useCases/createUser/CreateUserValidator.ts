import { Request, Response, NextFunction } from 'express'
import { isEmailValid, isPasswordValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class CreateUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { name, email, password } = req.body

        if (!name) {
            throw new AppException('Name invalid!', 400)
        }

        if (!email || !isEmailValid(email)) {
            throw new AppException('Email invalid!', 400)
        }

        if (!password || !isPasswordValid(password)) {
            throw new AppException('Password invalid!', 400)
        }

        return next()
    }
}

export { CreateUserValidator }
