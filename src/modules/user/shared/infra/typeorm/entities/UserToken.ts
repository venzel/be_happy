import { IUserToken } from '@modules/user/shared/entities/IUserToken'

class UserToken implements IUserToken {
    id: string
    ownerId: string
    token: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export { UserToken }
