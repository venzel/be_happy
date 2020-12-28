import { getRepository, Repository } from 'typeorm'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { PostgresUser } from '../entities/PostgresUser'

class PostgresUserRepository implements IUserRepository {
    private _repository: Repository<IUser>

    constructor() {
        this._repository = getRepository<IUser>(PostgresUser, 'default')
    }

    public async count(): Promise<number> {
        return this._repository.count({ where: { deleted_at: null } })
    }

    public async findOneById(user_id: string): Promise<IUser | undefined> {
        return await this._repository.findOne({ where: { id: user_id, deleted_at: null } })
    }

    public async findOneByName(user_name: string): Promise<IUser | undefined> {
        return await this._repository.findOne({ where: { name: user_name, deleted_at: null } })
    }

    public async findOneByEmail(user_email: string): Promise<IUser | undefined> {
        return await this._repository.findOne({ where: { email: user_email, deleted_at: null } })
    }

    public async create(data: ICreateUserDTO): Promise<IUser> {
        const { user_id: id, name, email, password, role, activated } = data

        const createdUser = this._repository.create({ id, name, email, password, role, activated })

        await this._repository.save(createdUser)

        return createdUser
    }

    public async save(user: IUser): Promise<IUser> {
        const currentDate = new Date()

        user.updated_at = currentDate

        await this._repository.save(user)

        return user
    }

    public async delete(user: IUser): Promise<IUser> {
        const currentDate = new Date()

        user.allowed = false
        user.deleted_at = currentDate

        await this.save(user)

        return user
    }

    public async list(): Promise<IUser[]> {
        return await this._repository.find()
    }
}

export { PostgresUserRepository }
