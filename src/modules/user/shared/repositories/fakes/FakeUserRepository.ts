import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { FakeUser } from '../../entities/fakes/FakeUser'
import { IUser } from '../../entities/models/IUser'
import { IUserRepository } from '../models/IUserRepository'

class FakeUserRepository implements IUserRepository {
    private _repository: IUser[]

    constructor() {
        this._repository = []
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

        if (userIndex !== -1) this._repository[userIndex] = user

        return user
    }

    public async delete(userId: string): Promise<IUser> {
        // const userIndex: number = this._repository.indexOf()

        throw new Error('Method not implemented.')
    }

    public async show(userId: string): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    public async list(): Promise<IUser[]> {
        throw new Error('Method not implemented.')
    }
}

export { FakeUserRepository }
