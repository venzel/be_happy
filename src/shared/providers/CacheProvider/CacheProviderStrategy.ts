import { container } from 'tsyringe'
import { ICacheProvider } from './models/ICacheProvider'
import { RedisCacheProvider } from './services/RedisCacheProvider'

class CacheProviderStrategy {
    private _map: Map<string, any>

    constructor() {
        this._init()
        this._setup()
    }

    private _init(): void {
        this._map = new Map<string, any>()
    }

    private _setup(): void {
        this._map.set('redis', RedisCacheProvider)
    }

    public setStrategy(service: string): void {
        const provider: any | undefined = this._map.get(service)

        if (!provider) throw new Error('Service provider not found!')

        container.registerSingleton<ICacheProvider>('CacheProvider', provider)
    }
}

export { CacheProviderStrategy }
