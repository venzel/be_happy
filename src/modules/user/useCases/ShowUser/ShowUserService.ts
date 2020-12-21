import { injectable, inject } from 'tsyringe'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ShowUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(data: IAuth, queryUserId: string): Promise<IUser> {
        const { owner_id, role } = data

        const existsUserWithId: IUser | undefined = await this._userRepository.findOneById(queryUserId)

        if (!existsUserWithId) throw new AppException('User not found!', 404)

        if (role === 'USER' && existsUserWithId.id !== owner_id)
            throw new AppException('It is not possible to show data another user!', 403)

        return existsUserWithId
    }
}

export { ShowUserService }
