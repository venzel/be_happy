import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { UpdateProfileUserService } from './UpdateProfileUserService'
import { IUser } from '@modules/user/shared/entities/IUser'
import { generateStatus } from '@shared/libs/Utils'

class UpdateProfileUserController {
    public async patch(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const { name, email, current_password } = req.body

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider = container.resolve<IHashProvider>('HashProvider')

        const updateProfileUserService = new UpdateProfileUserService(userRepository, hashProvider)

        const updatedProfileUser: IUser = await updateProfileUserService.execute({
            owner_id,
            name,
            email,
            current_password,
        })

        const status = generateStatus(false, 200, 'Succesfully profile updated user!')

        return res.status(200).json({ status, doc: classToClass(updatedProfileUser) })
    }
}

export { UpdateProfileUserController }
