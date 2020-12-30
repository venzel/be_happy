import { IUserToken } from '../models/schemas/IUserToken'
import { ICreateTokenDTO } from '../dtos/ICreateTokenDTO'

interface IUserTokenRepository {
    findOneByToken(token: string): Promise<IUserToken | undefined>

    create(data: ICreateTokenDTO): Promise<string>

    deleteTokensByOwnerId(owner_id: string): Promise<void>
}

export { IUserTokenRepository }
