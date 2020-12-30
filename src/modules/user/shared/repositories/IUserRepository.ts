import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUser } from '../models/entities/IUser'

interface IUserRepository {
    count(): Promise<number>

    findOneById(user_id: string): Promise<IUser | undefined>

    findOneByName(user_name: string): Promise<IUser | undefined>

    findOneByEmail(user_email: string): Promise<IUser | undefined>

    create(data: ICreateUserDTO): Promise<IUser>

    save(user: IUser): Promise<IUser>

    delete(user: IUser): Promise<IUser>

    list(): Promise<IUser[]>
}

export { IUserRepository }
