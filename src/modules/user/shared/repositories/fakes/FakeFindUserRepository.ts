import { IUser } from '../../entities/models/IUser'
import { IFindUserRepository } from '../models/IFindUserRepository'
import { IUserRepository } from '../models/IUserRepository'

class FakeFindUserRepository implements IFindUserRepository {
    private _userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository
    }

    private async _list(): Promise<IUser[]> {
        return await this._userRepository.list()
    }

    public async findById(userId: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    public async findByName(userName: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    public async findByEmail(userEmail: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }
}

export { FakeFindUserRepository }
