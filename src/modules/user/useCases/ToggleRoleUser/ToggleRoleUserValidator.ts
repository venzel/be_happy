import { Request, Response, NextFunction } from 'express'
import { isIdValid } from '@shared/helpers/validator'
import { AppException } from '@shared/exceptions/AppException'

class ToggleRoleUserValidator {
    public validate(req: Request, res: Response, next: NextFunction): any {
        const { owner_id } = req.auth

        const query_user_id = req.query.id?.toString()

        if (!isIdValid(query_user_id, 'uuid')) {
            throw new AppException('User id invalid!', 400)
        }

        if (owner_id === query_user_id) {
            throw new AppException('It is not possible to update role yourself!')
        }

        return next()
    }
}

export { ToggleRoleUserValidator }
