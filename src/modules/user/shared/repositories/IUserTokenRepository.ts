import { IUserToken } from '../entities/IUserToken'
import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO'

interface IUserTokenRepository {
    findOneById(ownerId: string): Promise<IUserToken | undefined>

    create(data: ICreateUserTokenDTO): Promise<IUserToken>

    save(userToken: IUserToken): Promise<void>
}

export { IUserTokenRepository }
