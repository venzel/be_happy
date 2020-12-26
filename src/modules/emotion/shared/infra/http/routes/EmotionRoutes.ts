import { Router } from 'express'
import { ListEmotionRoute } from '@modules/emotion/useCases/ListEmotions/ListEmotionsRoute'
import { CreateEmotionRoute } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionRoute'
import { UpdateEmotionRoute } from '@modules/emotion/useCases/UpdateEmotion/UpdateEmotionRoute'

class EmotionRoutes {
    public registerAll(router: Router): void {
        new ListEmotionRoute().register(router, '/emotions')

        new CreateEmotionRoute().register(router, '/emotion/create')

        new UpdateEmotionRoute().register(router, '/emotion/update')
    }
}

export { EmotionRoutes }
