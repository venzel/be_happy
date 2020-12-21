import { IUserToken } from '../../../entities/IUserToken'

class UserTokenFake implements IUserToken {
    public id: string
    public owner_id: string
    public token: string
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null
}

export { UserTokenFake }
