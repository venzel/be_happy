import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { UpdatePasswordUserValidator } from './UpdatePasswordUserValidator'
import { UpdatePasswordUserController } from './UpdatePasswordUserController'

class UpdatePasswordUserRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validator } = new UpdatePasswordUserValidator()
        const { update } = new UpdatePasswordUserController()

        router.put(path, authenticate, validator, update)
    }
}

export { UpdatePasswordUserRoute }
