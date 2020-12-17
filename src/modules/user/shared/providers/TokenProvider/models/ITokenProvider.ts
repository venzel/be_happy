import { ICreatePayloadDTO } from '@modules/user/shared/dtos/ICreatePayloadDTO'
import { IPayloadDTO } from '@modules/user/shared/dtos/IPayloadDTO'

interface ITokenProvider {
    generateToken(data: ICreatePayloadDTO): Promise<string>
    validateToken(token: string): IPayloadDTO
}

export { ITokenProvider }
