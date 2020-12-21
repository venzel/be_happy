import { Request, Response, NextFunction } from 'express'
import { isUUIDValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class ShowUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { owner_id, role } = req.auth

        const queryUserId: string | undefined = req.query.id?.toString()

        if (!queryUserId || !isUUIDValid(queryUserId)) throw new AppException('User id invalid!')

        if (role === 'USER' && queryUserId !== owner_id)
            throw new AppException('It is not possible to show data another user!')

        return next()
    }
}

export { ShowUserValidator }
