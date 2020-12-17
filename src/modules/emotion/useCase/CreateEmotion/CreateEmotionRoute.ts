import { Router } from 'express'
import { CreateEmotionValidator } from './CreateEmotionValidator'
import { CreateEmotionController } from './CreateEmotionController'
import { AuthenticateUser } from '@modules/user/shared/middlewares/AuthenticateUser'
import { RoleUser } from '@modules/user/shared/middlewares/RoleUser'
import { ActivatedUser } from '@modules/user/shared/middlewares/ActivatedUser'

class CreateEmotionRoute {
    public register(router: Router, path: string): void {
        const { authenticate } = new AuthenticateUser()
        const { role } = new RoleUser()
        const { activated } = new ActivatedUser()
        const { validator } = new CreateEmotionValidator()
        const { create } = new CreateEmotionController()

        router.post(path, authenticate, role(['USER']), activated, validator, create)
    }
}

export { CreateEmotionRoute }
