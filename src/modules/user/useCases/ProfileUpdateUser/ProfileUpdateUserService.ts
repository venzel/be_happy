import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IProfileUpdateUserDTO } from '@modules/user/shared/dtos/IProfileUpdateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ProfileUpdateUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('HashProvider') private _hashProvider: IHashProvider
    ) {}

    public async execute(owner: IAuth, data: IProfileUpdateUserDTO): Promise<IUser> {
        const { ownerId, role } = owner

        const { userId, name, email, oldPassword, newPassword } = data

        const existsUser: IUser | undefined = await this._userRepository.findOneById(userId)

        if (!existsUser) throw new AppException('User not exists!', 404)

        if (role === 'USER' && existsUser.id !== ownerId)
            throw new AppException('It is not allowed to change another users data!', 400)

        if (oldPassword !== existsUser.password) throw new AppException('Password not equals!', 400)

        const generateHash: string = await this._hashProvider.gererateHash(newPassword)

        existsUser.name = name
        existsUser.email = email
        existsUser.password = generateHash

        await this._userRepository.save(existsUser)

        return existsUser
    }
}

export { ProfileUpdateUserService }
