import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUser } from '../entities/IUser'

interface IUserRepository {
    findById(userId: string): Promise<IUser | undefined>
    findByName(userName: string): Promise<IUser | undefined>
    findByEmail(userEmail: string): Promise<IUser | undefined>
    create(data: ICreateUserDTO): Promise<IUser>
    save(user: IUser): Promise<IUser>
    delete(user: IUser): Promise<IUser>
    list(): Promise<IUser[]>
}

export { IUserRepository }
