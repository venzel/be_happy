import { container, DependencyContainer } from 'tsyringe'
import { ICacheProvider } from './models/ICacheProvider'
import { RedisCacheProvider } from './services/RedisCacheProvider'
import { IORedisCacheProvider } from './services/IORedisCacheProvider'

class CacheProviderStrategy {
    private _strategies: any = {}

    constructor() {
        this._strategies['redis'] = RedisCacheProvider
        this._strategies['ioredis'] = IORedisCacheProvider
    }

    public setStrategy(service: string): void {
        if (!this._strategies.hasOwnProperty(service))
            throw new Error('Service provider not found in strategies!')

        container.registerSingleton<ICacheProvider>('CacheProvider', this._strategies[service])
    }
}

export { CacheProviderStrategy }
