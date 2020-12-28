import { Router } from 'express'
import { ResetPasswordUserController } from './ResetPasswordUserController'
import { ResetPasswordUserValidator } from './ResetPasswordUserValidator'

class ResetPasswordUserMiddleware {
    public register(router: Router, path: string): void {
        const { validate } = new ResetPasswordUserValidator()
        const { handle } = new ResetPasswordUserController()

        router.patch(path, validate, handle)
    }
}

export { ResetPasswordUserMiddleware }
