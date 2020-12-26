import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdatePasswordUserService } from './UpdatePasswordUserService'
import { generateStatus } from '@shared/libs/utils'

class UpdatePasswordUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const { current_password, new_password } = req.body

        const updatePasswordUserService = container.resolve(UpdatePasswordUserService)

        await updatePasswordUserService.execute({ current_password, new_password, owner_id })

        const status = generateStatus(false, 200, 'Succesfully password user updated!')

        return res.status(200).json({ status })
    }
}

export { UpdatePasswordUserController }
