import { v4 as uuid } from 'uuid'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { FakeUserToken } from '../entities/FakeUserToken'
import { IGenerateTokenDTO } from '@modules/user/shared/dtos/IGenerateTokenDTO'

class FakeUserTokenRepository implements IUserTokenRepository {
    private _repository: IUserToken[]

    constructor() {
        this._repository = []
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return this._repository.find((data) => data.token === token)
    }

    public async generateToken(data: IGenerateTokenDTO): Promise<string> {
        const { owner_id } = data

        const fakeUserToken = new FakeUserToken()

        const token: string = uuid()

        const id: string = uuid()

        Object.assign(fakeUserToken, { id, token, owner_id })

        this._repository.push(fakeUserToken)

        return token
    }

    public async deleteTokensByOwnerId(owner_id: string): Promise<void> {
        this._repository = this._repository.filter((data) => data.owner_id !== owner_id)
    }
}

export { FakeUserTokenRepository }
