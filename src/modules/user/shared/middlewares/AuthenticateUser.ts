import { container } from 'tsyringe'
import { Request, Response, NextFunction } from 'express'
import { ITokenProvider } from '../providers/TokenProvider/models/ITokenProvider'
import { IPayloadDTO } from '../dtos/IPayloadDTO'
import { AppException } from '@shared/exceptions/AppException'

class AuthenticateUser {
    public authenticate(req: Request, res: Response, next: NextFunction): any {
        const schemaToken: string | undefined = req.headers.authorization

        if (!schemaToken) {
            throw new AppException('Token not provided!', 404)
        }

        const parts: string[] = schemaToken.split(' ')

        if (parts.length !== 2) {
            throw new AppException('Token parts invalid!', 403)
        }

        const [schema, token] = parts

        if (schema !== 'Bearer') {
            throw new AppException('Token parts invalid!', 403)
        }

        const tokenProvider: ITokenProvider = container.resolve<ITokenProvider>('TokenProvider')

        const payload: IPayloadDTO = tokenProvider.validateToken(token)

        req.auth = payload.user

        return next()
    }
}

export { AuthenticateUser }
