import { Router } from 'express'
import { CreateUserValidator } from './CreateUserValidator'
import { CreateUserController } from './CreateUserController'

class CreateUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new CreateUserValidator()
        const { create } = new CreateUserController()

        router.post(path, validator, create)
    }
}

export { CreateUserRoute }
