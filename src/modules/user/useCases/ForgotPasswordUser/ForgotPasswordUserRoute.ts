import { Router } from 'express'
import { ForgotPasswordUserController } from './ForgotPasswordUserController'
import { ForgotPasswordUserValidator } from './ForgotPasswordUserValidator'

class ForgotPasswordUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new ForgotPasswordUserValidator()
        const { handle } = new ForgotPasswordUserController()

        router.put(path, validator, handle)
    }
}

export { ForgotPasswordUserRoute }
