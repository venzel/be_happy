import { getRepository, Repository } from 'typeorm'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { UserToken } from '../entities/UserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'

class UserTokenRepository implements IUserTokenRepository {
    private _repository: Repository<IUserToken>

    constructor() {
        this._repository = getRepository(UserToken, 'default')
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return await this._repository.findOne({ where: { token } })
    }

    public async create(owner_id: string): Promise<IUserToken> {
        const createdUserToken = this._repository.create({ owner_id })

        await this._repository.save(createdUserToken)

        return createdUserToken
    }

    public async save(user_token: IUserToken): Promise<void> {
        await this._repository.save(user_token)
    }
}

export { UserTokenRepository }
