import { Request, Response, NextFunction } from 'express'
import { isIdValid } from '@shared/helpers/validator'
import { AppException } from '@shared/exceptions/AppException'

class ListNotificationsValidator {
    public validRequestData(req: Request, res: Response, next: NextFunction): any {
        const { role } = req.auth

        const query_user_id = req.query.user_id?.toString()

        if (role === 'USER' && query_user_id) {
            throw new AppException('Not authorized for this sector!', 403)
        }

        if (query_user_id && !isIdValid(query_user_id, 'uuid')) {
            throw new AppException('Provide a query user id valid!', 400)
        }

        return next()
    }
}

export { ListNotificationsValidator }
