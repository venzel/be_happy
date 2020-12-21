import { container } from 'tsyringe'
import { IQueueProvider } from './models/IQueueProvider'
import { BullQueueProvider } from './services/BullQueueProvider'

class QueueProviderStrategy {
    private _strategies: any = {}

    constructor() {
        this._strategies['redis'] = BullQueueProvider
    }

    public setStrategy(service: string): void {
        if (!this._strategies.hasOwnProperty(service))
            throw new Error('Service provider not found in strategies!')

        container.registerSingleton<IQueueProvider>('QueueProvider', this._strategies[service])
    }
}

export { QueueProviderStrategy }
