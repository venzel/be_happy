import { Router } from 'express'
import { AuthenticateUserValidator } from './AuthenticateUserValidator'
import { AuthenticateUserController } from './AuthenticateUserController'

class AuthenticateUserRoute {
    public register(router: Router, path: string): void {
        const { validate } = new AuthenticateUserValidator()
        const { create } = new AuthenticateUserController()

        router.post(path, validate, create)
    }
}

export { AuthenticateUserRoute }
