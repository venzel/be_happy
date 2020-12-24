import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { UpdatePasswordUserService } from './UpdatePasswordUserService'
import { generateStatus } from '@shared/libs/utils'

class UpdatePasswordUserController {
    public async patch(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const { current_password, new_password } = req.body

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider = container.resolve<IHashProvider>('HashProvider')

        const updatePasswordUserService = new UpdatePasswordUserService(userRepository, hashProvider)

        await updatePasswordUserService.execute({ current_password, new_password, owner_id })

        const status = generateStatus(false, 200, 'Succesfully password user updated!')

        return res.status(200).json({ status })
    }
}

export { UpdatePasswordUserController }
