import { Router } from 'express'
import { AuthenticateUserRoute } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserRoute'
import { CreateUserRoute } from '@modules/user/useCases/CreateUser/CreateUserRoute'
import { UpdatePasswordUserRoute } from '@modules/user/useCases/UpdatePasswordUser/UpdatePasswordUserRoute'
import { ForgotPasswordUserRoute } from '@modules/user/useCases/ForgotPasswordUser/ForgotPasswordUserRoute'
import { UpdateAvatarUserRoute } from '@modules/user/useCases/UpdateAvatarUser/UpdateAvatarUserRoute'

class UserRoutes {
    public registerAll(router: Router): void {
        new AuthenticateUserRoute().register(router, '/user/login')

        new CreateUserRoute().register(router, '/user/register')

        new UpdatePasswordUserRoute().register(router, '/user/update_password')

        new ForgotPasswordUserRoute().register(router, '/user/forgot_password')

        new ForgotPasswordUserRoute().register(router, '/user/reset_password')

        new UpdateAvatarUserRoute().register(router, '/user/update_avatar')
    }
}

export { UserRoutes }
