import { Router } from 'express'
import { CreateEmotionValidator } from './CreateEmotionValidator'
import { CreateEmotionController } from './CreateEmotionController'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { RoleUserMiddleware } from '@modules/user/shared/middlewares/RoleUserMIddleware'
import { ActivatedUserMiddleware } from '@modules/user/shared/middlewares/ActivatedUserMiddleware'

class CreateEmotionRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUserMiddleware()
        const { role } = new RoleUserMiddleware()
        const { activated } = new ActivatedUserMiddleware()
        const { validator } = new CreateEmotionValidator()
        const { create } = new CreateEmotionController()

        router.post(path, authenticate, role(['USER']), activated, validator, create)
    }
}

export { CreateEmotionRoute }
