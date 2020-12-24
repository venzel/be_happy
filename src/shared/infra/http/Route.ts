import { Router } from 'express'
import { CreateUserRoute } from '@modules/user/useCases/CreateUser/CreateUserRoute'
import { AuthenticateUserRoute } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserRoute'
import { UpdatePasswordUserRoute } from '@modules/user/useCases/UpdatePasswordUser/UpdatePasswordUserRoute'
import { ForgotPasswordUserRoute } from '@modules/user/useCases/ForgotPasswordUser/ForgotPasswordUserRoute'
import { CreateEmotionRoute } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionRoute'
import { UpdateAvatarUserRoute } from '@modules/user/useCases/UpdateAvatarUser/UpdateAvatarUserRoute'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        // USER
        new CreateUserRoute().register(router, '/user/register')
        new AuthenticateUserRoute().register(router, '/user/signin')
        new UpdatePasswordUserRoute().register(router, '/user/update_password')
        new ForgotPasswordUserRoute().register(router, '/user/forgot_password')
        new UpdateAvatarUserRoute().register(router, '/user/update_avatar')

        // EMOTION
        new CreateEmotionRoute().register(router, '/emotion/create')

        return router
    }
}

const route = Route.execute

export { route }
