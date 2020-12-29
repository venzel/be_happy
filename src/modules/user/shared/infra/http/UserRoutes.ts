import { Router } from 'express'
import { AuthenticateUserMiddleware } from '@modules/user/useCases/AuthenticateUser/AuthenticateUserMiddleware'
import { CreateUserMiddleware } from '@modules/user/useCases/CreateUser/CreateUserMiddleware'
import { UpdatePasswordUserMiddleware } from '@modules/user/useCases/UpdatePasswordUser/UpdatePasswordUserMiddleware'
import { ForgotPasswordUserMiddleware } from '@modules/user/useCases/ForgotPasswordUser/ForgotPasswordUserMiddleware'
import { ResetPasswordUserMiddleware } from '@modules/user/useCases/ResetPasswordUser/ResetPasswordUserMiddleware'
import { UpdateAvatarUserMiddleware } from '@modules/user/useCases/UpdateAvatarUser/UpdateAvatarUserMiddleware'
import { UpdateProfileUserMiddleware } from '@modules/user/useCases/UpdateProfileUser/UpdateProfileUserMiddleware'
import { ToggleRoleUserMiddleware } from '@modules/user/useCases/ToggleRoleUser/ToggleRoleUserMiddleware'
import { ShowUserMiddleware } from '@modules/user/useCases/ShowUser/ShowUserMiddleware'
import { DeleteUserMiddleware } from '@modules/user/useCases/DeleteUser/DeleteUserMiddleware'
import { ListUsersMiddleware } from '@modules/user/useCases/ListUsers/ListUsersMiddleware'
import { ToggleAllowUserMiddleware } from '@modules/user/useCases/ToogleAllowUser/ToggleAllowUserMiddleware'

class UserRoutes {
    public registerAll(router: Router): void {
        // get
        new ListUsersMiddleware().register(router, '/users?:count')

        // get
        new ShowUserMiddleware().register(router, '/user/show?:id')

        // delete
        new DeleteUserMiddleware().register(router, '/user/delete?:id')

        // post
        new AuthenticateUserMiddleware().register(router, '/user/login')

        // post
        new CreateUserMiddleware().register(router, '/user/register')

        // put
        new UpdatePasswordUserMiddleware().register(router, '/user/update_password')

        // put
        new ForgotPasswordUserMiddleware().register(router, '/user/forgot_password')

        // patch
        new ResetPasswordUserMiddleware().register(router, '/user/reset_password')

        // patch
        new UpdateAvatarUserMiddleware().register(router, '/user/update_avatar')

        // put
        new UpdateProfileUserMiddleware().register(router, '/user/update_profiler')

        // patch
        new ToggleRoleUserMiddleware().register(router, '/user/toggle_role?:id')

        // patch
        new ToggleAllowUserMiddleware().register(router, '/user/toggle_allow?:id')
    }
}

export { UserRoutes }
