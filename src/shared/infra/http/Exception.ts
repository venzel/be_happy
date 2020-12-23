import { Errback, Request, Response, NextFunction } from 'express'
import Youch from 'youch'
import { AppException } from '@shared/exceptions/AppException'
import { environment, email_admin } from '@configs/geral'
import { generateStatus } from '@shared/libs/Utils'

class Exception {
    static async execute(err: Errback, req: Request, res: Response, _: NextFunction): Promise<Response> {
        if (err instanceof AppException) {
            const status = generateStatus(true, err.code, err.message)

            return res.status(err.code).json({ status })
        }

        if (environment === 'development')
            return res.status(500).json(await new Youch(err, req).toJSON())

        const status = generateStatus(true, 500, `Error in system, contact admin: ${email_admin}`)

        return res.status(500).json({ status })
    }
}

const exception = Exception.execute

export { exception }
