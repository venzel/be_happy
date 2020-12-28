import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { RoleUserMiddleware } from '@modules/user/shared/middlewares/RoleUserMiddleware'
import { ToggleRoleUserValidator } from './ToggleRoleUserValidator'
import { ToggleRoleUserController } from './ToggleRoleUserController'

class ToggleRoleUserMiddleware {
    public register(router: Router, path: string) {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { role } = new RoleUserMiddleware()
        const { validate } = new ToggleRoleUserValidator()
        const { handle } = new ToggleRoleUserController()

        router.patch(path, authenticate, role(['ADMIN']), validate, handle)
    }
}

export { ToggleRoleUserMiddleware }
