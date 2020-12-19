import { v4 as uuid } from 'uuid'
import { ICreateUserTokenDTO } from '@modules/user/shared/dtos/ICreateUserTokenDTO'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { UserTokenFake } from '../entities/UserTokenFake'

class UserTokenRepositoryFake implements IUserTokenRepository {
    private _repository: IUserToken[]

    constructor() {
        this._repository = []
    }

    public async findOneById(ownerId: string): Promise<IUserToken | undefined> {
        return this._repository.find((user) => user.id === ownerId)
    }

    public async create(data: ICreateUserTokenDTO): Promise<IUserToken> {
        const { ownerId } = data

        const userToken = new UserTokenFake()

        Object.assign(userToken, { id: uuid(), ownerId })

        this._repository.push(userToken)

        return userToken
    }

    public async save(userToken: IUserToken): Promise<void> {
        const userIndex: number = this._repository.indexOf(userToken)

        if (userIndex !== -1) {
            this._repository[userIndex] = userToken
        }
    }
}

export { UserTokenRepositoryFake }
