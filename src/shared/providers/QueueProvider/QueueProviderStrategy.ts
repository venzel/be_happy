import { container } from 'tsyringe'
import { IQueueProvider } from './models/IQueueProvider'
import { BullQueueProvider } from './services/BullQueueProvider'

class QueueProviderStrategy {
    private _map: Map<string, any>

    constructor() {
        this._init()
        this._setup()
    }

    private _init(): void {
        this._map = new Map<string, any>()
    }

    private _setup(): void {
        this._map.set('bull', BullQueueProvider)
    }

    public setStrategy(service: string): void {
        const provider: any | undefined = this._map.get(service)

        if (!provider) throw new Error('Service provider not found!')

        container.registerSingleton<IQueueProvider>('QueueProvider', provider)
    }
}

export { QueueProviderStrategy }
