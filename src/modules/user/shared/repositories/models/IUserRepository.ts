import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUser } from '../../entities/models/IUser'

interface IUserRepository {
    create(user: ICreateUserDTO): Promise<IUser>
    save(user: IUser): Promise<IUser>
    delete(userId: string): Promise<IUser>
    show(userId: string): Promise<IUser>
    list(): Promise<IUser[]>
}

export { IUserRepository }
