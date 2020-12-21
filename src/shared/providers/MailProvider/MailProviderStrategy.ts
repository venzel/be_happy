import { container } from 'tsyringe'
import { IMailProvider } from './models/IMailProvider'
import { MailTrapMailProvider } from './services/MailTrapMailProvider'

class MailProviderStrategy {
    private _map: Map<string, any>

    constructor() {
        this._init()
        this._setup()
    }

    private _init(): void {
        this._map = new Map<string, any>()
    }

    private _setup(): void {
        this._map.set('mailtrap', MailTrapMailProvider)
    }

    public setStrategy(service: string): void {
        const provider: any | undefined = this._map.get(service)

        if (!provider) throw new Error('Service provider not found!')

        container.registerSingleton<IMailProvider>('MailProvider', provider)
    }
}

export { MailProviderStrategy }
