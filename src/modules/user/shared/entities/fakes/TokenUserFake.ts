import { ITokenUser } from '../../models/ITokenUser'

class TokenUserFake implements ITokenUser {
    private _id: string
    private _ownerId: string
    private _token: string
    private _createdAt: Date
    private _updatedAt: Date
    private _deletedAt: Date | null

    public id(): string {
        return this._id
    }

    public ownerId(): string {
        return this._ownerId
    }

    public token(): string {
        return this._token
    }

    public createdAt(): Date {
        return this._createdAt
    }

    public updatedAt(): Date {
        return this._updatedAt
    }

    public deletedAt(): Date | null {
        return this._deletedAt
    }
}

export { TokenUserFake }
