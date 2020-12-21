import { container } from 'tsyringe'
import { ITokenProvider } from './models/ITokenProvider'
import { JWTTokenProvider } from './services/JWTTokenProvider'

class TokenProviderStrategy {
    private _strategies: any = {}

    constructor() {
        this._strategies['jwt'] = JWTTokenProvider
    }

    public setStrategy(service: string): void {
        if (!this._strategies.hasOwnProperty(service))
            throw new Error('Service provider not found in strategies!')

        container.registerSingleton<ITokenProvider>('TokenProvider', this._strategies[service])
    }
}

export { TokenProviderStrategy }
