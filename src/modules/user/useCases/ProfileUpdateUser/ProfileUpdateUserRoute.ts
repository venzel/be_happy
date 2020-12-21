import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ProfileUpdateUserValidator } from './ProfileUpdateUserValidator'
import { ProfileUpdateUserController } from './ProfileUpdateUserController'

class ProfileUpdateUser {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validator } = new ProfileUpdateUserValidator()
        const { patch } = new ProfileUpdateUserController()

        router.patch(path, authenticate, validator, patch)
    }
}

export { ProfileUpdateUser }
