import { container } from 'tsyringe'

import '@shared/providers'
import '@modules/user/shared/providers'

import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { PostgresUserRepository } from '@modules/user/shared/infra/typeorm/postgres/repositories/PostgresUserRepository'

import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { MongoUserTokenRepository } from '@modules/user/shared/infra/typeorm/mongodb/repositories/MongoUserTokenRepository'

import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { PostgresEmotionRepository } from '@modules/emotion/shared/infra/typeorm/postgres/repositories/PostgresEmotionRepository'

import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { MongoEmotionReportRepository } from '@modules/emotion/shared/infra/typeorm/mongodb/repositories/MongoEmotionReportRepository'

import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { MongoNotificationRepository } from '@modules/notification/shared/infra/typeorm/mongodb/repositories/MongoNotificationRepository'

// postgres
container.registerSingleton<IUserRepository>('UserRepository', PostgresUserRepository)

// mongo
container.registerSingleton<IUserTokenRepository>('UserTokenRepository', MongoUserTokenRepository)

// postgres
container.registerSingleton<IEmotionRepository>('EmotionRepository', PostgresEmotionRepository)

// mongo
container.registerSingleton<IEmotionReportRepository>(
    'EmotionReportRepository',
    MongoEmotionReportRepository
)

// mongo
container.registerSingleton<INotificationRepository>(
    'NotificationRepository',
    MongoNotificationRepository
)
