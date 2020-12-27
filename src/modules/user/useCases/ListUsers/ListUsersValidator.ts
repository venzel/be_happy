import { Request, Response, NextFunction } from 'express'

class ListUsersValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const { count } = req.query

        return next()
    }
}

export { ListUsersValidator }
