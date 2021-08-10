import { Router } from 'express'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ListNotificationsValidator } from './ListNotificationsValidator'
import { ListNotificationsController } from './ListNotificationsController'

class ListNotificationsMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validRequestData } = new ListNotificationsValidator()
        const { handle } = new ListNotificationsController()

        router.get(path, authenticate, activated, validRequestData, handle)
    }
}

export { ListNotificationsMiddleware }
