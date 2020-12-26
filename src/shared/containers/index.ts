import { container } from 'tsyringe'

import '@shared/providers'
import '@modules/user/shared/providers'

import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { UserTypeormRepository } from '@modules/user/shared/infra/typeorm/repositories/TypeormUserRepository'

import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { TypeormUserTokenRepository } from '@modules/user/shared/infra/typeorm/repositories/TypeormUserTokenRepository'

import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { TypeormEmotionRepository } from '@modules/emotion/shared/infra/typeorm/repositories/TypeormEmotionRepository'

import { IEmotionReportRepository } from '@modules/emotion/shared/repositories/IEmotionReportRepository'
import { TypeormEmotionReportRepository } from '@modules/emotion/shared/infra/typeorm/repositories/TypeormEmotionReportRepository'

import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { MongoNotificationRepository } from '@modules/notification/shared/infra/typeorm/repositories/MongoNotificationRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserTypeormRepository)
container.registerSingleton<IUserTokenRepository>('UserTokenRepository', TypeormUserTokenRepository)
container.registerSingleton<IEmotionRepository>('EmotionRepository', TypeormEmotionRepository)
container.registerSingleton<IEmotionReportRepository>(
    'EmotionRepository',
    TypeormEmotionReportRepository
)
container.registerSingleton<INotificationRepository>(
    'NotificationRepository',
    MongoNotificationRepository
)
