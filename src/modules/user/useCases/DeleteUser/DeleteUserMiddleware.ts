import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { RoleUserMiddleware } from '@modules/user/shared/middlewares/RoleUserMiddleware'
import { DeleteUserValidator } from './DeleteUserValidator'
import { DeleteUserController } from './DeleteUserController'

class DeleteUserMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { role } = new RoleUserMiddleware()
        const { validate } = new DeleteUserValidator()
        const { handle } = new DeleteUserController()

        router.delete(path, authenticate, role(['ADMIN']), validate, handle)
    }
}

export { DeleteUserMiddleware }
