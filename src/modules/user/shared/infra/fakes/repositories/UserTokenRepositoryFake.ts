import { v4 as uuid } from 'uuid'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { UserTokenFake } from '../entities/UserTokenFake'

class UserTokenRepositoryFake implements IUserTokenRepository {
    private _repository: IUserToken[]

    constructor() {
        this._repository = []
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return this._repository.find((user) => user.token === token)
    }

    public async create(owner_id: string): Promise<IUserToken> {
        const userToken = new UserTokenFake()

        Object.assign(userToken, { id: uuid(), owner_id })

        this._repository.push(userToken)

        return userToken
    }

    public async save(user_token: IUserToken): Promise<void> {
        const userIndex: number = this._repository.indexOf(user_token)

        if (userIndex !== -1) {
            this._repository[userIndex] = user_token
        }
    }
}

export { UserTokenRepositoryFake }
