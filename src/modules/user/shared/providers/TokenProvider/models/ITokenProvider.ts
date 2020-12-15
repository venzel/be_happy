import { ICreatePayloadDTO } from '@modules/user/shared/dtos/ICreatePayloadDTO'

interface ITokenProvider {
    generateToken(data: ICreatePayloadDTO): Promise<string>
    validateToken(token: string): void
}

export { ITokenProvider }
