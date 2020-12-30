import { injectable, inject } from 'tsyringe'
import { IUser } from '@modules/user/shared/models/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IShowUserDTO } from './IShowUserDTO'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ShowUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(data: IShowUserDTO): Promise<IUser> {
        const { query_user_id, owner_id, role } = data

        const existsUser = await this._userRepository.findOneById(query_user_id)

        if (!existsUser) {
            throw new AppException('User not found!', 404)
        }

        if (role === 'USER' && existsUser.id !== owner_id) {
            throw new AppException('It is not possible to show data another user!', 403)
        }

        return existsUser
    }
}

export { ShowUserService }
