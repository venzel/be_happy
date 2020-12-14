import { ICreateUserTokenDTO } from '@modules/user/shared/dtos/ICreateUserTokenDTO'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'
import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'

class UserTokenRepository implements IUserTokenRepository {
    private _repository: IUserToken[]

    constructor() {
        this._repository = []
    }

    public async findById(ownerId: string): Promise<IUserToken | undefined> {
        throw new Error('Method not implemented.')
    }

    public async create(data: ICreateUserTokenDTO): Promise<IUserToken> {
        throw new Error('Method not implemented.')
    }

    public async save(userToken: IUserToken): Promise<void> {
        throw new Error('Method not implemented.')
    }
}

export { UserTokenRepository }
