import { IUserToken } from '../entities/IUserToken'

interface IUserTokenRepository {
    findOneByToken(token: string): Promise<IUserToken | undefined>

    create(ower_id: string): Promise<IUserToken>

    save(user_token: IUserToken): Promise<void>
}

export { IUserTokenRepository }
