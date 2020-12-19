import { Router } from 'express'
import { AuthenticateUser } from '@modules/user/shared/middlewares/AuthenticateUser'
import { ProfileUpdateUserValidator } from './ProfileUpdateUserValidator'
import { ProfileUpdateUserController } from './ProfileUpdateUserController'

class ProfileUpdateUser {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUser()
        const { validator } = new ProfileUpdateUserValidator()
        const { patch } = new ProfileUpdateUserController()

        router.patch(path, authenticate, validator, patch)
    }
}

export { ProfileUpdateUser }
