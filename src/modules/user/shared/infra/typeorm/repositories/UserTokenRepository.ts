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

    public async generateToken(owner_id: string): Promise<string> {
        const createdUserToken = this._repository.create({ owner_id })

        const { token } = await this._repository.save(createdUserToken)

        return token
    }
}

export { UserTokenRepository }
