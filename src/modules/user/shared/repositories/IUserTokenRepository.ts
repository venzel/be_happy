import { IUserToken } from '../entities/IUserToken'

interface IUserTokenRepository {
    findOneByToken(token: string): Promise<IUserToken | undefined>

    generateToken(ower_id: string): Promise<string>

    deleteTokensByOwnerId(owner_id: string): Promise<void>
}

export { IUserTokenRepository }
