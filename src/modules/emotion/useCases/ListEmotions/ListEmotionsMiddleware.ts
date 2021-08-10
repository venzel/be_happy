import { Router } from 'express'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ListEmotionsValidator } from './ListEmotionsValidator'
import { ListEmotionsController } from './ListEmotionsController'

class ListEmotionsMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validate } = new ListEmotionsValidator()
        const { handle } = new ListEmotionsController()

        router.get(path, authenticate, activated, validate, handle)
    }
}

export { ListEmotionsMiddleware }
