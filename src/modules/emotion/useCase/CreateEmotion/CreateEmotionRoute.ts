import { Router } from 'express'
import { CreateEmotionValidator } from './CreateEmotionValidator'
import { CreateEmotionController } from './CreateEmotionController'

class CreateEmotionRoute {
    public register(router: Router, path: string): void {
        const { validator } = new CreateEmotionValidator()
        const { create } = new CreateEmotionController()

        router.post(path, validator, create)
    }
}

export { CreateEmotionRoute }
