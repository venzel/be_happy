import { Router } from 'express'
import { UserRoutes } from '@modules/user/shared/infra/http/UserRoutes'
import { EmotionRoutes } from '@modules/emotion/shared/infra/http/routes/EmotionRoutes'
import { NotificationRoutes } from '@modules/notification/shared/infra/http/routes/NotificationRoutes'

class Route {
    public execute(): Router {
        const router: Router = Router()

        // USER
        new UserRoutes().registerAll(router)

        // EMOTION
        new EmotionRoutes().registerAll(router)

        // NOTIFICATION
        new NotificationRoutes().registerAll(router)

        return router
    }
}

const route = new Route()

export { route }
