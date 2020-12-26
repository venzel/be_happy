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
        return this._repository.find((user) => user.token === token)
    }

    // TODO: aqui
    public async generateToken(owner_id: string): Promise<string> {
        const fakeUserToken = new FakeUserToken()

        Object.assign(fakeUserToken, { id: uuid(), owner_id })

        this._repository.push(fakeUserToken)

        return 'c'
    }

    // TODO: aqui
    public async deleteTokensByOwnerId(owner_id: string): Promise<void> {
        throw new Error('Method not implemented.')
    }
}

export { FakeUserTokenRepository }
