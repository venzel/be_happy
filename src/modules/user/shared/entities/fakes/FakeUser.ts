import { IUser } from '../models/IUser'

class FakeUser implements IUser {
    private _id: string
    private _name: string
    private _email: string
    private _password: string
    private _role: string
    private _avatar: string
    private _allowed: boolean
    private _activeted: boolean
    private _createdAt: Date
    private _updatedAt: Date
    private _deletedAt: Date | null

    public id(): string {
        return this._id
    }

    public name(): string {
        return this._name
    }

    public email(): string {
        return this._email
    }

    public password(): string {
        return this._password
    }

    public role(): string {
        return this._role
    }

    public avatar(): string {
        return this._avatar
    }

    public allowed(): boolean {
        return this._allowed
    }

    public actived(): boolean {
        return this._activeted
    }

    public createdAt(): Date {
        return this._createdAt
    }

    public updateAt(): Date {
        return this._updatedAt
    }

    public deletedAt(): Date | null {
        return this._deletedAt
    }
}

export { FakeUser }
