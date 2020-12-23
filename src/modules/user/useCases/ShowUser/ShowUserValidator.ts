import { Request, Response, NextFunction } from 'express'
import { isUUIDValid } from '@shared/libs/regex'
import { AppException } from '@shared/exceptions/AppException'

class ShowUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { owner_id, role } = req.auth

        const query_user_id = req.query.id?.toString()

        if (!query_user_id || !isUUIDValid(query_user_id)) throw new AppException('User id invalid!')

        if (role === 'USER' && query_user_id !== owner_id)
            throw new AppException('It is not possible to show data another user!')

        return next()
    }
}

export { ShowUserValidator }
