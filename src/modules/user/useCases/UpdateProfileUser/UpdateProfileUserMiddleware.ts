import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { UpdateProfileUserValidator } from './UpdateProfileUserValidator'
import { UpdateProfileUserController } from './UpdateProfileUserController'

class UpdateProfileUserMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validate } = new UpdateProfileUserValidator()
        const { handle } = new UpdateProfileUserController()

        router.put(path, authenticate, validate, handle)
    }
}

export { UpdateProfileUserMiddleware }
