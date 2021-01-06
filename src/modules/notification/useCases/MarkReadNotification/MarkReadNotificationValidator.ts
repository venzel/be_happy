import { Request, Response, NextFunction } from 'express'
import { isIdValid } from '@shared/helpers/validator'
import { AppException } from '@shared/exceptions/AppException'

class MarkReadNotificationValidator {
    public validRequestData(req: Request, res: Response, next: NextFunction): any {
        const notification_id = req.query.id?.toString()

        if (!isIdValid(notification_id, 'mongo')) {
            throw new AppException('Notification id invalid!')
        }

        return next()
    }
}

export { MarkReadNotificationValidator }
