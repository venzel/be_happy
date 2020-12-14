import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'

class UserRepository implements IUserRepository {
    private _repository: IUser[]

    constructor() {
        this._repository = []
    }

    public async findById(userId: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    public async findByName(nameUser: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    public async findByEmail(emailUser: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    public async create(user: ICreateUserDTO): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    public async save(user: IUser): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    public async delete(user: IUser): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    public async repository(): Promise<IUser[]> {
        throw new Error('Method not implemented.')
    }
}

export { UserRepository }
