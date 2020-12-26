import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IListUsersDTO } from './IListUsersDTO'
import { IUser } from '@modules/user/shared/entities/IUser'

@injectable()
class ListUsersService {
    constructor(@inject('UserRepository') private _userRepository: IUserRepository) {}

    public async execute(data: IListUsersDTO): Promise<IUser[]> {
        const {} = data

        const users = await this._userRepository.list()

        return users
    }
}

export { ListUsersService }
