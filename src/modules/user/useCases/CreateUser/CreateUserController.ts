import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { CreateUserService } from './CreateUserService'
import { generateStatus } from '@shared/libs/utils'

class CreateUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        const createUserService = container.resolve(CreateUserService)

        const user = await createUserService.execute({ name, email, password })

        const status = generateStatus(false, 201, 'Succesfully created user!')

        const doc = classToClass(user)

        return res.status(201).json({ status, doc })
    }
}

export { CreateUserController }
