import { Router } from 'express'
import { CreateUserValidator } from './CreateUserValidator'
import { CreateUserController } from './CreateUserController'

class CreateUserMiddleware {
    public register(router: Router, path: string): void {
        const { validate } = new CreateUserValidator()
        const { handle } = new CreateUserController()

        router.post(path, validate, handle)
    }
}

export { CreateUserMiddleware }
