import 'dotenv/config'

class Providers {
    public cache_provider: string
    public mail_provider: string
    public queue_provider: string
    public storage_provider: string

    public constructor() {
        this.setup()
    }

    public setup(): void {
        this._cacheprovider()
        this._mailprovider()
        this._queueprovider()
        this._storageprovider()
    }

    private _cacheprovider(): void {
        const env: string | undefined = process.env.CACHE_PROVIDER

        if (!env) throw new Error('Error in var ambient: CACHE_PROVIDER!')

        this.cache_provider = env
    }

    private _mailprovider(): void {
        const env: string | undefined = process.env.MAIL_PROVIDER

        if (!env) throw new Error('Error in var ambient: MAIL_PROVIDER!')

        this.mail_provider = env
    }

    private _queueprovider(): void {
        const env: string | undefined = process.env.QUEUE_PROVIDER

        if (!env) throw new Error('Error in var ambient: QUEUE_PROVIDER!')

        this.queue_provider = env
    }

    private _storageprovider(): void {
        const env: string | undefined = process.env.STORAGE_PROVIDER

        if (!env) throw new Error('Error in var ambient: STORAGE_PROVIDER!')

        this.storage_provider = env
    }
}

const { cache_provider, mail_provider, queue_provider, storage_provider } = new Providers()

export { cache_provider }
export { mail_provider }
export { queue_provider }
export { storage_provider }
