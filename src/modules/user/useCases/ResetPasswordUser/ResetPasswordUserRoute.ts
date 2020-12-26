import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ResetPasswordUserValidator } from './ResetPasswordUserValidator'
import { ResetPasswordUserController } from './ResetPasswordUserController'

class ResetPasswordUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new ResetPasswordUserValidator()
        const { handle } = new ResetPasswordUserController()

        router.patch(path, validator, handle)
    }
}

export { ResetPasswordUserRoute }
