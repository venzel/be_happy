import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { ProfileUpdateUserService } from './ProfileUpdateUserService'
import { IUser } from '@modules/user/shared/entities/IUser'

class ProfileUpdateUserController {
    public async patch(req: Request, res: Response): Promise<Response> {
        const { name, email, oldPassword, newPassword } = req.body

        const { ownerId } = req.auth

        const args = { ownerId, name, email, oldPassword, newPassword }

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const hashProvider = container.resolve<IHashProvider>('HashProvider')

        const profileUpdateUserService = new ProfileUpdateUserService(userRepository, hashProvider)

        const userProfileUpdated: IUser = await profileUpdateUserService.execute(args)

        const status = {
            error: false,
            code: 200,
            message: 'User profile updated successfully!',
        }

        return res.status(200).json({ status, data: classToClass(userProfileUpdated) })
    }
}

export { ProfileUpdateUserController }
