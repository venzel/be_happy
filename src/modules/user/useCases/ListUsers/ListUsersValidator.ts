import { Request, Response, NextFunction } from 'express'

class ListUsersValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        return next()
    }
}

export { ListUsersValidator }
