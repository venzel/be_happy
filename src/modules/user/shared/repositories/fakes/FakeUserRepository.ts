import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { FakeUser } from '../../entities/fakes/UserFake'
import { IUser } from '../../entities/models/IUser'
import { IUserRepository } from '../models/IUserRepository'

class FakeUserRepository implements IUserRepository {
    private _repository: IUser[]

    constructor() {
        this._repository = []
    }

    public async findById(userId: string): Promise<IUser | undefined> {
        return this._repository.find((user) => user.id === userId)
    }

    public async findByName(userName: string): Promise<IUser | undefined> {
        return this._repository.find((user) => user.name === userName)
    }

    public async findByEmail(userEmail: string): Promise<IUser | undefined> {
        return this._repository.find((user) => user.email === userEmail)
    }

    public async create(user: ICreateUserDTO): Promise<IUser> {
        const { name, email, password, role } = user

        const fakeUser: IUser = new FakeUser()

        Object.assign(fakeUser, { name, email, password, role, activated: true, allowed: true })

        this._repository.push(fakeUser)

        return fakeUser
    }

    public async save(user: IUser): Promise<IUser> {
        const userIndex: number = this._repository.indexOf(user)

        if (userIndex !== -1) {
            this._repository[userIndex] = user
        }

        return user
    }

    public async delete(user: IUser): Promise<IUser> {
        const userIndex: number = this._repository.indexOf(user)

        if (userIndex !== -1) {
            const currentDate = new Date()

            user.updatedAt = currentDate
            user.deletedAt = currentDate

            this._repository[userIndex] = user
        }

        return user
    }

    public async repository(): Promise<IUser[]> {
        return this._repository
    }
}

export { FakeUserRepository }
