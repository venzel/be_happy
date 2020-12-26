import { Router } from 'express'
import { AuthenticateUserValidator } from './AuthenticateUserValidator'
import { AuthenticateUserController } from './AuthenticateUserController'

class AuthenticateUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new AuthenticateUserValidator()
        const { handle } = new AuthenticateUserController()

        router.post(path, validator, handle)
    }
}

export { AuthenticateUserRoute }
