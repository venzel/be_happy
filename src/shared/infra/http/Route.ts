import { Router } from 'express'
import { AuthenticateUserRoute } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserRoute'
import { CreateUserRoute } from '@modules/user/useCases/CreateUser/CreateUserRoute'
import { UpdatePasswordUserRoute } from '@modules/user/useCases/UpdatePasswordUser/UpdatePasswordUserRoute'
import { ForgotPasswordUserRoute } from '@modules/user/useCases/ForgotPasswordUser/ForgotPasswordUserRoute'
import { ResetPasswordUserRoute } from '@modules/user/useCases/ResetPasswordUser/ResetPasswordUserRoute'
import { UpdateAvatarUserRoute } from '@modules/user/useCases/UpdateAvatarUser/UpdateAvatarUserRoute'
import { CreateEmotionRoute } from '@modules/emotion/useCases/CreateEmotion/CreateEmotionRoute'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        // USER
        new AuthenticateUserRoute().register(router, '/user/login')
        new CreateUserRoute().register(router, '/user/register')
        new UpdatePasswordUserRoute().register(router, '/user/update_password')
        new ForgotPasswordUserRoute().register(router, '/user/forgot_password')
        new ResetPasswordUserRoute().register(router, '/user/reset_password')
        new UpdateAvatarUserRoute().register(router, '/user/update_avatar')

        // // EMOTION
        // new CreateEmotionRoute().register(router, '/emotion/create')

        return router
    }
}

const route = Route.execute

export { route }
