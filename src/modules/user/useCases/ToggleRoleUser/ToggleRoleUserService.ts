import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class ToggleRoleUserService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(query_user_id: string): Promise<IUser> {
        const existsUserWithId = await this._userRepository.findOneById(query_user_id)

        if (!existsUserWithId) throw new AppException('User not exists!', 404)

        const toggleRole = existsUserWithId.role === 'ADMIN' ? 'USER' : 'ADMIN'

        /* Data update */

        existsUserWithId.role = toggleRole

        /* End data updata */

        const savedUser = await this._userRepository.save(existsUserWithId)

        return savedUser
    }
}

export { ToggleRoleUserService }
