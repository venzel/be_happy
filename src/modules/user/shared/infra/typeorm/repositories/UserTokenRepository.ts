import { getRepository, Repository } from 'typeorm'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { UserToken } from '../entities/UserToken'
import { ICreateUserTokenDTO } from '@modules/user/shared/dtos/ICreateUserTokenDTO'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'

class UserTokenRepository implements IUserTokenRepository {
    private _repository: Repository<IUserToken>

    constructor() {
        this._repository = getRepository(UserToken, 'postgres')
    }

    public async findById(ownerId: string): Promise<IUserToken | undefined> {
        return await this._repository.findOne({ where: { ownerId } })
    }

    public async create(data: ICreateUserTokenDTO): Promise<IUserToken> {
        const { ownerId } = data

        const userTokenCreated = this._repository.create({ ownerId })

        await this._repository.save(userTokenCreated)

        return userTokenCreated
    }

    public async save(userToken: IUserToken): Promise<void> {
        await this._repository.save(userToken)
    }
}

export { UserTokenRepository }
