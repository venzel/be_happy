import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ShowEmotionValidator } from './ShowEmotionValidator'
import { ShowEmotionController } from './ShowEmotionController'

class ShowEmotionMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { validRequestData } = new ShowEmotionValidator()
        const { handle } = new ShowEmotionController()

        router.get(path, authenticate, validRequestData, handle)
    }
}

export { ShowEmotionMiddleware }
