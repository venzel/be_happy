import { ICreateUserDTO } from '@modules/user/shared/dtos/ICreateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'

class UserRepository implements IUserRepository {
    findById(userId: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    findByName(nameUser: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    findByEmail(emailUser: string): Promise<IUser | undefined> {
        throw new Error('Method not implemented.')
    }

    create(user: ICreateUserDTO): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    save(user: IUser): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    delete(user: IUser): Promise<IUser> {
        throw new Error('Method not implemented.')
    }

    repository(): Promise<IUser[]> {
        throw new Error('Method not implemented.')
    }
}

export { UserRepository }
