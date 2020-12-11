import Youch from 'youch'
import { Errback, Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'
import { environment } from '@configs/Geral'

class Exception {
    static async execute(err: Errback, rq: Request, rs: Response, nx: NextFunction): Promise<Response> {
        if (err instanceof AppException)
            return rs.status(err.statusCode).json({ status: err.statusCode, message: err.message })

        if (environment === 'development') return rs.status(500).json(await new Youch(err, rq).toJSON())

        return rs.status(500).json({ status: 500, message: 'Error in system, contact admin!' })
    }
}

const exception = Exception.execute

export { exception }
