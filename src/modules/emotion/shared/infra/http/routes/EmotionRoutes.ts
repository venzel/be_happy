import { Router } from 'express'
import { ListEmotionMiddleware } from '@modules/emotion/useCases/ListEmotions/ListEmotionsMiddleware'
import { CreateEmotionMiddleware } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionMiddleware'
import { UpdateEmotionMiddleware } from '@modules/emotion/useCases/UpdateEmotion/UpdateEmotionMiddleware'

class EmotionRoutes {
    public registerAll(router: Router): void {
        // get
        new ListEmotionMiddleware().register(router, '/emotions?:user_id')

        // post
        new CreateEmotionMiddleware().register(router, '/emotion/create')

        // put
        new UpdateEmotionMiddleware().register(router, '/emotion/update')
    }
}

export { EmotionRoutes }
