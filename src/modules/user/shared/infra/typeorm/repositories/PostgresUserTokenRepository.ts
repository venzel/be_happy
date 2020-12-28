import { getRepository, Repository } from 'typeorm'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { PostgresUserToken } from '../entities/PostgresUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { IGenerateTokenDTO } from '@modules/user/shared/dtos/IGenerateTokenDTO'

class PostgresUserTokenRepository implements IUserTokenRepository {
    private _repository: Repository<IUserToken>

    constructor() {
        this._repository = getRepository(PostgresUserToken, 'default')
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return await this._repository.findOne({ where: { token } })
    }

    public async generateToken(data: IGenerateTokenDTO): Promise<string> {
        const { token_id: id, owner_id } = data

        const createdUserToken = this._repository.create({ id, owner_id })

        const { token } = await this._repository.save(createdUserToken)

        return token
    }

    public async deleteTokensByOwnerId(owner_id: string): Promise<void> {
        await this._repository.delete({ owner_id })
    }
}

export { PostgresUserTokenRepository }
