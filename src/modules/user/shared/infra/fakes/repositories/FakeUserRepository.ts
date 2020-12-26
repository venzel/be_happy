// import { v4 as uuid } from 'uuid'
import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { FakeUser } from '../entities/FakeUser'

class FakeUserRepository implements IUserRepository {
    private _repository: IUser[]

    constructor() {
        this._repository = []
    }

    public async count(): Promise<number> {
        return this._repository.length
    }

    public async findOneById(user_id: string): Promise<IUser | undefined> {
        return this._repository.find((user) => user.id === user_id)
    }

    public async findOneByName(user_name: string): Promise<IUser | undefined> {
        return this._repository.find((user) => user.name === user_name)
    }

    public async findOneByEmail(user_email: string): Promise<IUser | undefined> {
        return this._repository.find((user) => user.email === user_email)
    }

    public async create(user: ICreateUserDTO): Promise<IUser> {
        const { name, email, password, role, activated } = user

        const fakeUser: IUser = new FakeUser()

        Object.assign(fakeUser, { id: '10', name, email, password, role, activated })

        this._repository.push(fakeUser)

        return fakeUser
    }

    public async save(user: IUser): Promise<IUser> {
        const userIndex: number = this._repository.indexOf(user)

        if (userIndex !== -1) {
            const currentDate = new Date()

            user.updated_at = currentDate

            this._repository[userIndex] = user
        }

        return user
    }

    public async delete(user: IUser): Promise<IUser> {
        const userIndex: number = this._repository.indexOf(user)

        if (userIndex !== -1) {
            const currentDate = new Date()

            user.updated_at = currentDate
            user.deleted_at = currentDate

            this._repository[userIndex] = user
        }

        return user
    }

    public async list(): Promise<IUser[]> {
        return this._repository
    }
}

export { FakeUserRepository }
