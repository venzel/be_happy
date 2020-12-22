import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { UpdateProfileUserValidator } from './UpdateProfileUserValidator'
import { UpdateProfileUserController } from './UpdateProfileUserController'

class UpdateProfileUser {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validator } = new UpdateProfileUserValidator()
        const { patch } = new UpdateProfileUserController()

        router.patch(path, authenticate, validator, patch)
    }
}

export { UpdateProfileUser }
