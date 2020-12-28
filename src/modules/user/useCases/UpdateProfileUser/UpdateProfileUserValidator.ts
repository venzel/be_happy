import { Request, Response, NextFunction } from 'express'
import { isEmailValid } from '@shared/libs/regex'
import { AppException } from '@shared/exceptions/AppException'

class UpdateProfileUserValidator {
    public validate(req: Request, res: Response, next: NextFunction): any {
        const { name, email, current_password } = req.body

        if (!name) {
            throw new AppException('Name invalid!', 400)
        }

        if (!email || !isEmailValid(email)) {
            throw new AppException('Email invalid!', 400)
        }

        if (!current_password) {
            throw new AppException('Current passoword invalid!', 400)
        }

        return next()
    }
}

export { UpdateProfileUserValidator }
