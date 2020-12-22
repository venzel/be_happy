import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'
import { IDeleteUserDTO } from '@modules/user/shared/dtos/IDeleteUserDTO'

@injectable()
class DeleteUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(data: IDeleteUserDTO): Promise<IUser> {
        const { query_user_id, owner_id, role } = data

        const existsUserWithId: IUser | undefined = await this._userRepository.findOneById(query_user_id)

        if (!existsUserWithId) throw new AppException('User not found!', 404)

        if (role === 'USER' && existsUserWithId.id !== owner_id)
            throw new AppException('It not permited delete another user id!', 403)

        const deletedUser: IUser = await this._userRepository.delete(existsUserWithId)

        return deletedUser
    }
}

export { DeleteUserService }
