import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ToggleAllowUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(query_user_id: string): Promise<IUser> {
        const existsUser = await this._userRepository.findOneById(query_user_id)

        if (!existsUser) {
            throw new AppException('User not exists!', 404)
        }

        const toggleAllow = existsUser.allowed === true ? false : true

        /* Data update */

        existsUser.allowed = toggleAllow

        /* End data update */

        const savedUser = await this._userRepository.save(existsUser)

        return savedUser
    }
}

export { ToggleAllowUserService }
