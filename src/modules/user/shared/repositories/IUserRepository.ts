import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUser } from '../entities/IUser'

interface IUserRepository {
    findById(userId: string): Promise<IUser | undefined>
    findByName(nameUser: string): Promise<IUser | undefined>
    findByEmail(emailUser: string): Promise<IUser | undefined>
    create(user: ICreateUserDTO): Promise<IUser>
    save(user: IUser): Promise<IUser>
    delete(user: IUser): Promise<IUser>
    repository(): Promise<IUser[]>
}

export { IUserRepository }
