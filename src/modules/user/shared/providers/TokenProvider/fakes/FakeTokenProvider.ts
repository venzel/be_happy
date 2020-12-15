import { ICreatePayloadDTO } from '@modules/user/shared/dtos/ICreatePayloadDTO'
import { IPayloadDTO } from '@modules/user/shared/dtos/IPayloadDTO'
import { randomBytes } from 'crypto'
import { ITokenProvider } from '../models/ITokenProvider'

class FakeTokenProvider implements ITokenProvider {
    public async generateToken(data: ICreatePayloadDTO): Promise<string> {
        const token: string = randomBytes(8).toString('hex')

        return token
    }

    public validateToken(payload: string): IPayloadDTO {
        const ownerId: string = randomBytes(2).toString('hex')

        return {
            user: {
                ownerId,
                role: 'USER',
                activated: true,
            },
        }
    }
}

export { FakeTokenProvider }
