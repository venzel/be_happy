import { Router } from 'express'
import { ListEmotionsMiddleware } from '@modules/emotion/useCases/ListEmotions/ListEmotionsMiddleware'
import { ShowEmotionMiddleware } from '@modules/emotion/useCases/ShowEmotion/ShowEmotionMiddleware'
import { CreateEmotionMiddleware } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionMiddleware'
import { UpdateEmotionMiddleware } from '@modules/emotion/useCases/UpdateEmotion/UpdateEmotionMiddleware'
import { DeleteEmotionMiddleware } from '@modules/emotion/useCases/DeleteEmotion/DeleteEmotionMiddleware'

class EmotionRoutes {
    public registerAll(router: Router): void {
        // get
        new ListEmotionsMiddleware().register(router, '/emotions?:user_id')

        // get
        new ShowEmotionMiddleware().register(router, '/emotion/show?:id')

        // post
        new CreateEmotionMiddleware().register(router, '/emotion/create')

        // put
        new UpdateEmotionMiddleware().register(router, '/emotion/update')

        // delete
        new DeleteEmotionMiddleware().register(router, '/emotion/delete?:id')
    }
}

export { EmotionRoutes }
