import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserMiddleware'
import { CreateUserMiddleware } from '@modules/user/useCases/CreateUser/CreateUserMiddleware'
import { UpdatePasswordUserMiddleware } from '@modules/user/useCases/UpdatePasswordUser/UpdatePasswordUserMiddleware'
import { ForgotPasswordUserMiddleware } from '@modules/user/useCases/ForgotPasswordUser/ForgotPasswordUserMiddleware'
import { UpdateAvatarUserMiddleware } from '@modules/user/useCases/UpdateAvatarUser/UpdateAvatarUserMiddleware'
import { UpdateProfileUserMiddleware } from '@modules/user/useCases/UpdateProfileUser/UpdateProfileUserMiddleware'
import { ListUsersMiddleware } from '@modules/user/useCases/ListUsers/ListUsersMiddleware'

class UserRoutes {
    public registerAll(router: Router): void {
        new AuthenticateUserMiddleware().register(router, '/user/login')

        new CreateUserMiddleware().register(router, '/user/register')

        new UpdatePasswordUserMiddleware().register(router, '/user/update_password')

        new ForgotPasswordUserMiddleware().register(router, '/user/forgot_password')

        new ForgotPasswordUserMiddleware().register(router, '/user/reset_password')

        new UpdateAvatarUserMiddleware().register(router, '/user/update_avatar')

        new UpdateProfileUserMiddleware().register(router, '/user/update_profiler')

        new ListUsersMiddleware().register(router, '/users')
    }
}

export { UserRoutes }
