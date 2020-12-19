import { injectable, inject } from 'tsyringe'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ShowUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(queryUserId: string, data: IAuth): Promise<IUser> {
        const { ownerId, role } = data

        const existsUser: IUser | undefined = await this._userRepository.findOneById(queryUserId)

        if (!existsUser) throw new AppException('User not found!', 404)

        if (role === 'USER' && existsUser.id !== ownerId)
            throw new AppException('User id not equals!', 403)

        return existsUser
    }
}

export { ShowUserService }
