import { Router } from 'express'
import { AuthenticateUser } from '@modules/user/shared/middlewares/AuthenticateUser'
import { ActivatedUser } from '@modules/user/shared/middlewares/ActivatedUser'
import { UpdateNotificationValidator } from './UpdateNotificationValidator'
import { UpdateNotificationController } from './UpdateNotificationController'

class UpdateNotificationRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUser()
        const { activated } = new ActivatedUser()
        const { validator } = new UpdateNotificationValidator()
        const { update } = new UpdateNotificationController()

        router.patch(path, authenticate, activated, validator, update)
    }
}

export { UpdateNotificationRoute }
