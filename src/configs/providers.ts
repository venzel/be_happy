import 'dotenv/config'
import { IProvidersConfigDTO } from './dtos/IProvidersConfigDTO'

const _cacheProvider = (): string => {
    const env = process.env.CACHE_PROVIDER
    if (!env) throw new Error('Error in var ambient: CACHE_PROVIDER!')
    return env
}

const _mailProvider = (): string => {
    const env = process.env.MAIL_PROVIDER
    if (!env) throw new Error('Error in var ambient: MAIL_PROVIDER!')
    return env
}

const _queueProvider = (): string => {
    const env = process.env.QUEUE_PROVIDER
    if (!env) throw new Error('Error in var ambient: QUEUE_PROVIDER!')
    return env
}

const _storageProvider = (): string => {
    const env = process.env.STORAGE_PROVIDER
    if (!env) throw new Error('Error in var ambient: STORAGE_PROVIDER!')
    return env
}

const configs: IProvidersConfigDTO = {
    cache_provider: _cacheProvider(),
    mail_provider: _mailProvider(),
    queue_provider: _queueProvider(),
    storage_provider: _storageProvider(),
}

const { cache_provider, mail_provider, queue_provider, storage_provider } = configs

export { cache_provider }
export { mail_provider }
export { queue_provider }
export { storage_provider }
