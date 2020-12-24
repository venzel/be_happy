import { IUserToken } from '../entities/IUserToken'

interface IUserTokenRepository {
    findOneByToken(token: string): Promise<IUserToken | undefined>

    generateToken(ower_id: string): Promise<string>
}

export { IUserTokenRepository }
