import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IStorageProvider } from '@shared/providers/StorageProvider/models/IStorageProvider'
import { IUpdateAvatarUserDTO } from '@modules/user/shared/dtos/IUpdateAvatarUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class UpdateAvatarUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('StorageProvider') private _storageProvider: IStorageProvider
    ) {}

    async execute(data: IUpdateAvatarUserDTO): Promise<IUser> {
        const { filename, owner_id } = data

        const existsUserWithId: IUser | undefined = await this._userRepository.findOneById(owner_id)

        if (!existsUserWithId) throw new AppException('User not exists!', 404)

        if (existsUserWithId.avatar) await this._storageProvider.deleteFile(existsUserWithId.avatar)

        const nameFileSaved: string = await this._storageProvider.saveFile(filename)

        existsUserWithId.avatar = nameFileSaved

        const savedUser: IUser = await this._userRepository.save(existsUserWithId)

        return savedUser
    }
}

export { UpdateAvatarUserService }
