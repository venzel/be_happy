import { Router } from 'express'
import { ForgotPasswordUserController } from './ForgotPasswordUserController'
import { ForgotPasswordUserValidator } from './ForgotPasswordUserValidator'

class ForgotPasswordUserMiddleware {
    public register(router: Router, path: string): void {
        const { validate } = new ForgotPasswordUserValidator()
        const { handle } = new ForgotPasswordUserController()

        router.put(path, validate, handle)
    }
}

export { ForgotPasswordUserMiddleware }
