import { IUserToken } from '../../../entities/IUserToken'

class UserTokenFake implements IUserToken {
    public id: string
    public ownerId: string
    public token: string
    public createdAt: Date
    public updatedAt: Date
    public deletedAt: Date | null
}

export { UserTokenFake }
