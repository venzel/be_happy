import { IUserToken } from '../entities/IUserToken'
import { IGenerateTokenDTO } from '../dtos/IGenerateTokenDTO'

interface IUserTokenRepository {
    findOneByToken(token: string): Promise<IUserToken | undefined>

    generateToken(data: IGenerateTokenDTO): Promise<string>

    deleteTokensByOwnerId(owner_id: string): Promise<void>
}

export { IUserTokenRepository }
