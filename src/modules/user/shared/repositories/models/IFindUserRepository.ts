import { IUser } from '../../entities/models/IUser'

interface IFindUserRepository {
    findById(userId: string): Promise<IUser | undefined>
    findByName(userName: string): Promise<IUser | undefined>
    findByEmail(userEmail: string): Promise<IUser | undefined>
}

export { IFindUserRepository }
