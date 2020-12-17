import { Router } from 'express'
import { CreateUserRoute } from '@modules/user/useCases/CreateUser/CreateUserRoute'
import { AuthenticateUserRoute } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserRoute'
import { CreateEmotionRoute } from '@modules/emotion/useCase/CreateEmotion/CreateEmotionRoute'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        // GLOBAL
        new CreateUserRoute().register(router, '/register')
        new AuthenticateUserRoute().register(router, '/signin')

        // EMOTION
        new CreateEmotionRoute().register(router, '/emotion/create')

        return router
    }
}

const route = Route.execute

export { route }
