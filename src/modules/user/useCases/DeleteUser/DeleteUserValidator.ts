import { Request, Response, NextFunction } from 'express'
import { isUUIDValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class DeleteUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { ownerId, role } = req.auth

        const queryUserId: string | undefined = req.query.id?.toString()

        if (!queryUserId || !isUUIDValid(queryUserId)) throw new AppException('User id invalid!')

        if (ownerId === queryUserId) throw new AppException('It is not possible to delete yourself!')

        if (role === 'USER' && ownerId !== queryUserId)
            throw new AppException('It is not possible to delete another user!')

        return next()
    }
}

export { DeleteUserValidator }
