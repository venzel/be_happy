import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { UpdateNotificationValidator } from './UpdateNotificationValidator'
import { UpdateNotificationController } from './UpdateNotificationController'

class UpdateNotificationMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validator } = new UpdateNotificationValidator()
        const { handle } = new UpdateNotificationController()

        router.patch(path, authenticate, activated, validator, handle)
    }
}

export { UpdateNotificationMiddleware }
