import { container } from 'tsyringe'
import { IStorageProvider } from './models/IStorageProvider'
import { LocalStorageProvider } from './services/LocalStorageProvider'

class StorageProviderStrategy {
    private _map: Map<string, any>

    constructor() {
        this._init()
        this._setup()
    }

    private _init(): void {
        this._map = new Map<string, any>()
    }

    private _setup(): void {
        this._map.set('local', LocalStorageProvider)
    }

    public setStrategy(service: string): void {
        const provider: any | undefined = this._map.get(service)

        if (!provider) throw new Error('Service provider not found!')

        container.registerSingleton<IStorageProvider>('StorageProvider', provider)
    }
}

export { StorageProviderStrategy }
