import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'
import { DeleteEmotionValidator } from './DeleteEmotionValidator'
import { DeleteEmotionController } from './DeleteEmotionController'

class DeleteEmotionMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validRequestData } = new DeleteEmotionValidator()
        const { handle } = new DeleteEmotionController()

        router.delete(path, authenticate, activated, validRequestData, handle)
    }
}

export { DeleteEmotionMiddleware }
