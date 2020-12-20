import { Request, Response, NextFunction } from 'express'
import { isUUIDValid, isEmailValid, isPasswordValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class ProfileUpdateUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { ownerId, role } = req.auth

        const { userId, name, email, oldPassword, newPassword } = req.body

        if (role === 'USER' && ownerId !== userId)
            throw new AppException('It is not allowed to change another users data!', 400)

        if (!userId || !isUUIDValid(userId)) throw new AppException('UserId invalid!', 400)

        if (!name) throw new AppException('Name invalid!', 400)

        if (!email || !isEmailValid(email)) throw new AppException('Email invalid!', 400)

        if (!oldPassword) throw new AppException('Old passoword invalid!')

        if (!newPassword || !isPasswordValid(newPassword))
            throw new AppException('New password invalid!')

        if (oldPassword !== newPassword) throw new AppException('Password not equals!', 400)

        return next()
    }
}

export { ProfileUpdateUserValidator }
