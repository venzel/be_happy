import { getRepository, Repository } from 'typeorm'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { PostgresUserToken } from '../entities/PostgresUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'

class PostgresUserTokenRepository implements IUserTokenRepository {
    private _repository: Repository<IUserToken>

    constructor() {
        this._repository = getRepository(PostgresUserToken, 'default')
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return await this._repository.findOne({ where: { token } })
    }

    public async generateToken(owner_id: string): Promise<string> {
        const createdUserToken = this._repository.create({ owner_id })

        const { token } = await this._repository.save(createdUserToken)

        return token
    }

    public async deleteTokensByOwnerId(owner_id: string): Promise<void> {
        await this._repository.delete({ owner_id })
    }
}

export { PostgresUserTokenRepository }
