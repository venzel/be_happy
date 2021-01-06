import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { RoleUserMiddleware } from '@modules/user/shared/middlewares/RoleUserMiddleware'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { UpdateEmotionValidator } from './UpdateEmotionValidator'
import { UpdateEmotionController } from './UpdateEmotionController'

class UpdateEmotionMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { role } = new RoleUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validRequestData } = new UpdateEmotionValidator()
        const { handle } = new UpdateEmotionController()

        router.put(path, authenticate, role(['USER']), activated, validRequestData, handle)

        // userIsAuthenticated, allowedTo(['USER']), userIsActivated, validRequestData, handle
    }
}

export { UpdateEmotionMiddleware }
