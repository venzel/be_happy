import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { MarkReadNotificationValidator } from './MarkReadNotificationValidator'
import { MarkReadNotificationController } from './MarkReadNotificationController'

class MarkReadNotificationMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validate } = new MarkReadNotificationValidator()
        const { handle } = new MarkReadNotificationController()

        router.patch(path, authenticate, activated, validate, handle)
    }
}

export { MarkReadNotificationMiddleware }
