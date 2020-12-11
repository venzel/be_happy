import { container } from 'tsyringe'

import '@shared/providers'
import '@modules/user/shared/providers'

import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { UserRepository } from '@modules/user/shared/infra/typeorm/repositories/UserRepository'

import { IUserTokenRepository } from '@modules/user/shared/repositories/IUserTokenRepository'
import { UserTokenRepository } from '@modules/user/shared/infra/typeorm/repositories/UserTokenRepository'

import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'
import { EmotionRepository } from '@modules/emotion/shared/infra/typeorm/repositories/EmotionRepository'

import { INotificationRepository } from '@modules/notification/shared/repositories/INotificationRepository'
import { NotificationRepository } from '@modules/notification/shared/infra/typeorm/repositories/NotificationRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<IUserTokenRepository>('UserTokenRepository', UserTokenRepository)
container.registerSingleton<IEmotionRepository>('AppointmentRepository', EmotionRepository)
container.registerSingleton<INotificationRepository>('NotificationRepository', NotificationRepository)
