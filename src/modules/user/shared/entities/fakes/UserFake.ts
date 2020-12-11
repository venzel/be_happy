import { IUser } from '../models/IUser'

class FakeUser implements IUser {
    public id: string
    public name: string
    public email: string
    public password: string
    public role: string
    public avatar: string
    public allowed: boolean
    public activeted: boolean
    public createdAt: Date
    public updatedAt: Date
    public deletedAt: Date | null
}

export { FakeUser }
