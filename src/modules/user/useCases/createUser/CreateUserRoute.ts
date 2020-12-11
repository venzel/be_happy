import { Router } from 'express'
import { CreateUserController } from './CreateUserController'
import { CreateUserValidator } from './CreateUserValidator'

class CreateUserRoute {
    public register(router: Router, path: string): void {
        const { validator } = new CreateUserValidator()
        const { create } = new CreateUserController()

        router.post(path, validator, create)
    }
}

export { CreateUserRoute }
