import { Router } from 'express'
import { CreateUserRoute } from '@modules/user/useCases/createUser/CreateUserRoute'
import { AuthenticateUserRoute } from '@modules/user/useCases/authenticateUser/AuthenticateUserRoute'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        new CreateUserRoute().register(router, '/register')
        new AuthenticateUserRoute().register(router, '/signin')

        return router
    }
}

const route = Route.execute

export { route }
