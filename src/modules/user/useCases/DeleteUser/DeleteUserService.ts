import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class DeleteUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(owner: IAuth, queryUserId: string): Promise<IUser> {
        const { ownerId, role } = owner

        const existsUser: IUser | undefined = await this._userRepository.findOneById(queryUserId)

        if (!existsUser) throw new AppException('User not found!', 404)

        if (role === 'USER' && existsUser.id !== ownerId)
            throw new AppException('It not permited delete another user id!', 403)

        const userDeleted: IUser = await this._userRepository.delete(existsUser)

        return userDeleted
    }
}

export { DeleteUserService }
