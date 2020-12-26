import { Router } from 'express'
import { ListEmotionMiddleware } from '@modules/emotion/useCases/ListEmotions/ListEmotionsMiddleware'
import { CreateEmotionMiddleware } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionMiddleware'
import { UpdateEmotionMiddleware } from '@modules/emotion/useCases/UpdateEmotion/UpdateEmotionMiddleware'

class EmotionRoutes {
    public registerAll(router: Router): void {
        new ListEmotionMiddleware().register(router, '/emotions')

        new CreateEmotionMiddleware().register(router, '/emotion/create')

        new UpdateEmotionMiddleware().register(router, '/emotion/update')
    }
}

export { EmotionRoutes }
