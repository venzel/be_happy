import { Router } from 'express'
import { ForgotPasswordUserController } from './ForgotPasswordUserController'
import { ForgotPasswordUserValidator } from './ForgotPasswordUserValidator'

class ForgotPasswordUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new ForgotPasswordUserValidator()
        const { update } = new ForgotPasswordUserController()

        router.put(path, validator, update)
    }
}

export { ForgotPasswordUserRoute }
