import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { DeleteUserValidator } from './DeleteUserValidator'
import { DeleteUserController } from './DeleteUserController'

class DeleteUserRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validator } = new DeleteUserValidator()
        const { destroy } = new DeleteUserController()

        router.delete(path, authenticate, validator, destroy)
    }
}

export { DeleteUserRoute }
