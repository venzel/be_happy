import { Router } from 'express'
import { AuthenticateUserValidator } from './AuthenticateUserValidator'
import { AuthenticateUserController } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserController'

class AuthenticateUserMiddleware {
    public register(router: Router, path: string): void {
        const { validator } = new AuthenticateUserValidator()
        const { handle } = new AuthenticateUserController()

        router.post(path, validator, handle)
    }
}

export { AuthenticateUserMiddleware }
