import { Request, Response, NextFunction } from 'express'
import { isEmailValid, isPasswordValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class ProfileUpdateUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { name, email, oldPassword, newPassword } = req.body

        if (!name) throw new AppException('Name invalid!')

        if (!email || !isEmailValid(email)) throw new AppException('Email invalid!')

        if (!oldPassword) throw new AppException('Old passoword invalid!')

        if (!newPassword || !isPasswordValid(newPassword))
            throw new AppException('New password invalid!')

        if (oldPassword !== newPassword) throw new AppException('Password not equals!')

        return next()
    }
}

export { ProfileUpdateUserValidator }
