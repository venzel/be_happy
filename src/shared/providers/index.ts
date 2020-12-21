import { CacheProviderStrategy } from './CacheProvider/CacheProviderStrategy'
import { MailProviderStrategy } from './MailProvider/MailProviderStrategy'
import { QueueProviderStrategy } from './QueueProvider/QueueProviderStrategy'
import { StorageProviderStrategy } from './StorageProvider/StorageProviderStrategy'
import { cache_provider, mail_provider, queue_provider, storage_provider } from '@configs/Providers'

new CacheProviderStrategy().setStrategy(cache_provider)
new MailProviderStrategy().setStrategy(mail_provider)
new QueueProviderStrategy().setStrategy(queue_provider)
new StorageProviderStrategy().setStrategy(storage_provider)
