import { Router } from 'express'
import { AuthenticateUserValidator } from './AuthenticateUserValidator'
import { AuthenticateUserController } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserController'

class AuthenticateUserMiddleware {
    public register(router: Router, path: string): void {
        const { validate } = new AuthenticateUserValidator()
        const { handle } = new AuthenticateUserController()

        router.post(path, validate, handle)
    }
}

export { AuthenticateUserMiddleware }
