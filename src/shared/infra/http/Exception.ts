import Youch from 'youch'
import { Errback, Request, Response, NextFunction } from 'express'
import { AppException } from '@shared/exceptions/AppException'
import { environment, email_admin } from '@configs/Geral'

class Exception {
    static async execute(
        err: Errback,
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        if (err instanceof AppException) {
            return res.status(err.statusCode).json({
                status: {
                    error: true,
                    code: err.statusCode,
                    message: err.message,
                },
            })
        }

        if (environment === 'development')
            return res.status(500).json(await new Youch(err, req).toJSON())

        return res.status(500).json({
            status: {
                error: true,
                code: 500,
                message: `Error in system, contact admin: ${email_admin}`,
            },
        })
    }
}

const exception = Exception.execute

export { exception }
