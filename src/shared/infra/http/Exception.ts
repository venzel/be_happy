import Youch from 'youch'
import { Errback, Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'
import { environment } from '@configs/Geral'

class Exception {
    static async execute(
        err: Errback,
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        if (err instanceof AppException)
            return res.status(err.statusCode).json({ status: err.statusCode, message: err.message })

        if (environment === 'development')
            return res.status(500).json(await new Youch(err, req).toJSON())

        return res.status(500).json({ status: 500, message: 'Error in system, contact admin!' })
    }
}

const exception = Exception.execute

export { exception }
