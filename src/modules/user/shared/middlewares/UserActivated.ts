import { AppException } from '@shared/exceptions/AppException'
import { Request, Response, NextFunction } from 'express'

class UserActivated {
    public activated(req: Request, res: Response, next: NextFunction): any {
        const activated: boolean = req.auth.activated

        if (!activated) {
            throw new AppException('User not activated!')
        }

        return next()
    }
}

export { UserActivated }
