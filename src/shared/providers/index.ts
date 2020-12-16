import { container } from 'tsyringe'

import { ICacheProvider } from './CacheProvider/models/ICacheProvider'
import { RedisCacheProvider } from './CacheProvider/services/RedisCacheProvider'

import { IMailProvider } from './MailProvider/models/IMailProvider'
import { MailTrapMailProvider } from './MailProvider/services/MailTrapMailProvider'

import { IQueueProvider } from './QueueProvider/models/IQueueProvider'
import { BullQueueProvider } from './QueueProvider/services/BullQueueProvider'

import { IStorageProvider } from './StorageProvider/models/IStorageProvider'
import { LocalStorageProvider } from './StorageProvider/services/LocalStorageProvider'

container.registerSingleton<ICacheProvider>('CacheProvider', RedisCacheProvider)
container.registerSingleton<IMailProvider>('MailProvider', MailTrapMailProvider)
container.registerSingleton<IMailProvider>('MailJobProvider', MailTrapMailProvider)
container.registerSingleton<IQueueProvider>('QueueProvider', BullQueueProvider)
container.registerSingleton<IStorageProvider>('StorageProvider', LocalStorageProvider)
