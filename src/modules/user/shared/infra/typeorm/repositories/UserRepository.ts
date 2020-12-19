import { getRepository, Repository, Not } from 'typeorm'
import { IUser } from '@modules/user/shared/entities/IUser'
import { User } from '../entities/User'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'

class UserRepository implements IUserRepository {
    private _repository: Repository<IUser>

    constructor() {
        this._repository = getRepository(User, 'postgres')
    }

    public async findById(userId: string): Promise<IUser | undefined> {
        return await this._repository.findOne({ where: { id: userId, deletedAt: null } })
    }

    public async findByName(userName: string): Promise<IUser | undefined> {
        return await this._repository.findOne({ where: { name: userName, deletedAt: null } })
    }

    public async findByEmail(userEmail: string): Promise<IUser | undefined> {
        return await this._repository.findOne({ where: { email: userEmail, deletedAt: null } })
    }

    public async create(data: ICreateUserDTO): Promise<IUser> {
        const { name, email, password, role } = data

        const userCreated = this._repository.create({ name, email, password, role })

        await this._repository.save(userCreated)

        return userCreated
    }

    public async save(user: IUser): Promise<IUser> {
        const currentDate = new Date()

        user.updatedAt = currentDate

        await this._repository.save(user)

        return user
    }

    public async delete(user: IUser): Promise<IUser> {
        const currentDate = new Date()

        user.allowed = false
        user.deletedAt = currentDate

        await this.save(user)

        return user
    }

    public async list(): Promise<IUser[]> {
        return await this._repository.find()
    }
}

export { UserRepository }
