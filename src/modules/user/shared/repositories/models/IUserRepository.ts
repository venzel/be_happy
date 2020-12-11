import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUser } from '../../entities/models/IUser'

interface IUserRepository {
    create(user: ICreateUserDTO): Promise<IUser>
    save(user: IUser): Promise<IUser>
    delete(user: IUser): Promise<IUser>
    repository(): Promise<IUser[]>
}

export { IUserRepository }
