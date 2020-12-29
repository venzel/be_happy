import { container } from 'tsyringe'

import '@shared/providers'
import '@modules/user/shared/providers'

import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { PostgresUserRepository } from '@modules/user/shared/infra/typeorm/repositories/PostgresUserRepository'

import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { PostgresUserTokenRepository } from '@modules/user/shared/infra/typeorm/repositories/PostgresUserTokenRepository'

import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { PostgresEmotionRepository } from '@modules/emotion/shared/infra/typeorm/repositories/PostgresEmotionRepository'

import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { MongoEmotionReportRepository } from '@modules/emotion/shared/infra/mongodb/repositories/MongoEmotionReportRepository'

import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { MongoNotificationRepository } from '@modules/notification/shared/infra/mongodb/repositories/MongoNotificationRepository'

container.registerSingleton<IUserRepository>('UserRepository', PostgresUserRepository)
container.registerSingleton<IUserTokenRepository>('UserTokenRepository', PostgresUserTokenRepository)
container.registerSingleton<IEmotionRepository>('EmotionRepository', PostgresEmotionRepository)
container.registerSingleton<IEmotionReportRepository>(
    'EmotionReportRepository',
    MongoEmotionReportRepository
)
container.registerSingleton<INotificationRepository>(
    'NotificationRepository',
    MongoNotificationRepository
)
