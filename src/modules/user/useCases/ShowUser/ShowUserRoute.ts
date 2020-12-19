import { Router } from 'express'
import { AuthenticateUser } from '@modules/user/shared/middlewares/AuthenticateUser'
import { ShowUserController } from './ShowUserController'
import { ShowUserValidator } from './ShowUserValidator'

class ShowUserRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUser()
        const { validator } = new ShowUserValidator()
        const { show } = new ShowUserController()

        router.get(path, authenticate, validator, show)
    }
}

export { ShowUserRoute }
