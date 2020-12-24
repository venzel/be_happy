import { Router } from 'express'
import { ForgotPasswordUserController } from './ForgotPasswordUserController'
import { ForgotPasswordUserValidator } from './ForgotPasswordUserValidator'

class ForgotPasswordUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new ForgotPasswordUserValidator()
        const { patch } = new ForgotPasswordUserController()

        router.patch(path, validator, patch)
    }
}

export { ForgotPasswordUserRoute }
