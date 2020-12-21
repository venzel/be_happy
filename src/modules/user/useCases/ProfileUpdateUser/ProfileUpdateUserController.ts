import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ProfileUpdateUserService } from './ProfileUpdateUserService'
import { IUser } from '@modules/user/shared/entities/IUser'

class ProfileUpdateUserController {
    public async patch(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const { name, email, current_password } = req.body

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider = container.resolve<IHashProvider>('HashProvider')

        const profileUpdateUserService = new ProfileUpdateUserService(userRepository, hashProvider)

        const userProfileUpdated: IUser = await profileUpdateUserService.execute({
            owner_id,
            name,
            email,
            current_password,
        })

        const status = {
            error: false,
            code: 200,
            message: 'User profile updated successfully!',
        }

        return res.status(200).json({ status, doc: classToClass(userProfileUpdated) })
    }
}

export { ProfileUpdateUserController }
