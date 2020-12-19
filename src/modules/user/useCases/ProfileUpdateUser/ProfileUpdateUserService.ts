import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IProfileUpdateUserDTO } from '@modules/user/shared/dtos/IProfileUpdateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ProfileUpdateUserService {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
        @inject('HashProvider') private hashProvider: IHashProvider
    ) {}

    public async execute(data: IProfileUpdateUserDTO): Promise<IUser> {
        const { ownerId, name, email, oldPassword, newPassword } = data

        const existsUser: IUser | undefined = await this.userRepository.findOneById(ownerId)

        if (!existsUser) throw new AppException('User not exists!', 404)

        if (oldPassword !== existsUser.password) throw new AppException('Password not equals!', 400)

        existsUser.name = name
        existsUser.email = email
        existsUser.password = await this.hashProvider.gererateHash(newPassword)

        await this.userRepository.save(existsUser)

        return existsUser
    }
}

export { ProfileUpdateUserService }
