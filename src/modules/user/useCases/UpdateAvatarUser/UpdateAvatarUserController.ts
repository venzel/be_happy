import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IStorageProvider } from '@shared/providers/StorageProvider/models/IStorageProvider'
import { UpdateAvatarUserService } from './UpdateAvatarUserService'
import { IUser } from '@modules/user/shared/entities/IUser'
import { generateStatus } from '@shared/libs/utils'

class UpdateAvatarUserController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { owner_id } = req.auth

        const { filename } = req.file

        const userRepository = container.resolve<IUserRepository>('UserRepository')
        const storageProvider = container.resolve<IStorageProvider>('StorageProvider')

        const updateAvatarUserService = new UpdateAvatarUserService(userRepository, storageProvider)

        const updatedAvatarUser: IUser = await updateAvatarUserService.execute({ filename, owner_id })

        const status = generateStatus(false, 200, 'Succesfully updated avatar user!')

        return res.status(200).json({ status, doc: classToClass(updatedAvatarUser) })
    }
}

export { UpdateAvatarUserController }
