import { MarkReadNotificationMiddleware } from '@modules/notification/useCases/MarkReadNotification/MarkReadNotificationMiddleware'
import { Router } from 'express'

class NotificationRoutes {
    public registerAll(router: Router): void {
        // patch
        new MarkReadNotificationMiddleware().register(router, '/notification/mark_read?:id')
    }
}

export { NotificationRoutes }
