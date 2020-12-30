import { MongoRepository, getMongoRepository } from 'typeorm'
import { IUserToken } from '@modules/user/shared/models/schemas/IUserToken'
import { MongoUserToken } from '../schemas/MongoUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { ICreateTokenDTO } from '@modules/user/shared/dtos/ICreateTokenDTO'

class MongoUserTokenRepository implements IUserTokenRepository {
    private _repository: MongoRepository<IUserToken>

    constructor() {
        this._repository = getMongoRepository(MongoUserToken, 'mongodb')
    }

    public async findOneByToken(token: string): Promise<IUserToken | undefined> {
        return await this._repository.findOne({ where: { token } })
    }

    public async create(data: ICreateTokenDTO): Promise<string> {
        const { token, owner_id } = data

        const createdUserToken = this._repository.create({ token, owner_id })

        await this._repository.save(createdUserToken)

        return token
    }

    public async deleteTokensByOwnerId(owner_id: string): Promise<void> {
        await this._repository.delete({ owner_id })
    }
}

export { MongoUserTokenRepository }
