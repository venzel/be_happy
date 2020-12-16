import { Router } from 'express'
import { CreateUserRoute } from '@modules/user/useCases/createUser/CreateUserRoute'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        new CreateUserRoute().register(router, '/register')

        return router
    }
}

const route = Route.execute

export { route }
