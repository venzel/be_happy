import { v4 as uuid } from 'uuid'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { FakeUserToken } from '../entities/FakeUserToken'

class FakeUserTokenRepository implements IUserTokenRepository {
    private _repository: IUserToken[]

    constructor() {
        this._repository = []
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return this._repository.find((data) => data.token === token)
    }

    public async generateToken(owner_id: string): Promise<string> {
        const fakeUserToken = new FakeUserToken()

        const token: string = uuid()

        Object.assign(fakeUserToken, { id: uuid(), token, owner_id })

        this._repository.push(fakeUserToken)

        return token
    }

    public async deleteTokensByOwnerId(owner_id: string): Promise<void> {
        this._repository = this._repository.filter((data) => data.owner_id !== owner_id)
    }
}

export { FakeUserTokenRepository }
