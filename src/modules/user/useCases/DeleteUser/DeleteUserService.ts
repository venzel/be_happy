import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class DeleteUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(owner: IAuth, queryUserId: string): Promise<IUser> {
        const { owner_id, role } = owner

        const existsUserWithId: IUser | undefined = await this._userRepository.findOneById(queryUserId)

        if (!existsUserWithId) throw new AppException('User not found!', 404)

        if (role === 'USER' && existsUserWithId.id !== owner_id)
            throw new AppException('It not permited delete another user id!', 403)

        const userDeleted: IUser = await this._userRepository.delete(existsUserWithId)

        return userDeleted
    }
}

export { DeleteUserService }
