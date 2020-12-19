import { Router } from 'express'
import { AuthenticateUser } from '@modules/user/shared/middlewares/AuthenticateUser'
import { DeleteUserValidator } from './DeleteUserValidator'
import { DeleteUserController } from './DeleteUserController'

class DeleteUserRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUser()
        const { validator } = new DeleteUserValidator()
        const { destroy } = new DeleteUserController()

        router.delete(path, authenticate, validator, destroy)
    }
}

export { DeleteUserRoute }
