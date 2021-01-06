import { ListNotificationsMiddleware } from '@modules/notification/useCases/ListNotifications/ListNotificationsMiddleware'
import { MarkReadNotificationMiddleware } from '@modules/notification/useCases/MarkReadNotification/MarkReadNotificationMiddleware'
import { Router } from 'express'

class NotificationRoutes {
    public registerAll(router: Router): void {
        // get
        new ListNotificationsMiddleware().register(router, '/notifications?:user_id')

        // patch
        new MarkReadNotificationMiddleware().register(router, '/notification/mark_read?:id')
    }
}

export { NotificationRoutes }
