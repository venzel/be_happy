import { Request, Response, NextFunction } from 'express'
import { isUUIDValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class DeleteUserValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const userIdDelete: string | undefined = req.query.id?.toString()
        const { ownerId, role } = req.auth

        if (userIdDelete && !isUUIDValid(userIdDelete)) throw new AppException('User id invalid!')

        if (role === 'ADMIN') {
            if (userIdDelete === ownerId)
                throw new AppException('It is not possible to delete yourself!')
        } else {
            if (userIdDelete !== ownerId)
                throw new AppException('It is not possible to delete another user!')
        }

        return next()
    }
}

export { DeleteUserValidator }
