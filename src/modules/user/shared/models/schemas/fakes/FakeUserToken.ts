import { IUserToken } from '@modules/user/shared/models/schemas/IUserToken'

class FakeUserToken implements IUserToken {
    public _id: string
    public owner_id: string
    public token: string
    public created_at: Date
    public updated_at: Date
}

export { FakeUserToken }
