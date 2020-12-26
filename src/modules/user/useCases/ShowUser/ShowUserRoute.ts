import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ShowUserController } from './ShowUserController'
import { ShowUserValidator } from './ShowUserValidator'

class ShowUserRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validator } = new ShowUserValidator()
        const { handle } = new ShowUserController()

        router.get(path, authenticate, validator, handle)
    }
}

export { ShowUserRoute }
