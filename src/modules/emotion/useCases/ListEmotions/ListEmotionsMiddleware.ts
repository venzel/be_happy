import { Router } from 'express'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { RoleUserMiddleware } from '@modules/user/shared/middlewares/RoleUserMiddleware'
import { ListEmotionsValidator } from './ListEmotionsValidator'
import { ListEmotionsController } from './ListEmotionsController'

class ListEmotionMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validate } = new ListEmotionsValidator()
        const { handle } = new ListEmotionsController()

        router.get(path, authenticate, activated, validate, handle)
    }
}

export { ListEmotionMiddleware }
