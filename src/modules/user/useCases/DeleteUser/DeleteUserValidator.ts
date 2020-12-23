import { Request, Response, NextFunction } from 'express'
import { isUUIDValid } from '@shared/libs/regex'
import { AppException } from '@shared/exceptions/AppException'

class DeleteUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { owner_id, role } = req.auth

        const query_user_id = req.query.id?.toString()

        if (!query_user_id || !isUUIDValid(query_user_id)) throw new AppException('User id invalid!')

        if (owner_id === query_user_id) throw new AppException('It is not possible to delete yourself!')

        if (role === 'USER' && owner_id !== query_user_id)
            throw new AppException('It is not possible to delete another user!')

        return next()
    }
}

export { DeleteUserValidator }
