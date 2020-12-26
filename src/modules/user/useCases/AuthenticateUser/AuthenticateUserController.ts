import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { AuthenticateUserService } from './AuthenticateUserService'
import { generateStatus } from '@shared/libs/utils'

class AuthenticateUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        const authenticateUserService = container.resolve(AuthenticateUserService)

        const user = await authenticateUserService.execute({ email, password })

        const status = generateStatus(false, 200, 'Succesfully authenticated user!')

        const doc = classToClass(user)

        return res.status(200).json({ status, doc })
    }
}

export { AuthenticateUserController }
