import { IUserToken } from '../entities/IUserToken'
import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO'

interface IUserTokenRepository {
    findOneById(owner_id: string): Promise<IUserToken | undefined>

    create(data: ICreateUserTokenDTO): Promise<IUserToken>

    save(user_token: IUserToken): Promise<void>
}

export { IUserTokenRepository }
