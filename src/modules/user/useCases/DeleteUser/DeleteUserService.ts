import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IDeleteUserDTO } from './IDeleteUserDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class DeleteUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(data: IDeleteUserDTO): Promise<IUser> {
        const { query_user_id, owner_id, role } = data

        const existsUserWithId = await this._userRepository.findOneById(query_user_id)

        if (!existsUserWithId) throw new AppException('User not found!', 404)

        if (role === 'USER' && existsUserWithId.id !== owner_id)
            throw new AppException('It not permited delete another user id!', 403)

        const deletedUser = await this._userRepository.delete(existsUserWithId)

        return deletedUser
    }
}

export { DeleteUserService }
