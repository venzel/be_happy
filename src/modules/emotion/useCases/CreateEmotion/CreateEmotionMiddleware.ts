import { Router } from 'express'
import { CreateEmotionValidator } from './CreateEmotionValidator'
import { CreateEmotionController } from './CreateEmotionController'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { RoleUserMiddleware } from '@modules/user/shared/middlewares/RoleUserMiddleware'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'

class CreateEmotionMiddleware {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { role } = new RoleUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validate } = new CreateEmotionValidator()
        const { create } = new CreateEmotionController()

        router.post(path, authenticate, role(['USER']), activated, validate, create)
    }
}

export { CreateEmotionMiddleware }
