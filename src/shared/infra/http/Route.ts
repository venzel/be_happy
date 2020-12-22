import { Router } from 'express'
import { CreateUserRoute } from '@modules/user/useCases/CreateUser/CreateUserRoute'
import { AuthenticateUserRoute } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserRoute'
import { CreateEmotionRoute } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionRoute'
import { UpdateAvatarUserRoute } from '@modules/user/useCases/UpdateAvatarUser/UpdateAvatarUserRoute'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        // GLOBAL
        new CreateUserRoute().register(router, '/user/register')
        new AuthenticateUserRoute().register(router, '/user/signin')
        new UpdateAvatarUserRoute().register(router, '/user/update_avatar')

        // EMOTION
        new CreateEmotionRoute().register(router, '/emotion/create')

        return router
    }
}

const route = Route.execute

export { route }
