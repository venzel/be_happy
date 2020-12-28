import { Request, Response, NextFunction } from 'express'
import { isIdMongooseValid } from '@shared/libs/regex'
import { AppException } from '@shared/exceptions/AppException'

class UpdateNotificationValidator {
    public validate(req: Request, res: Response, next: NextFunction): any {
        const notification_id = req.query.id?.toString()

        if (!notification_id || !isIdMongooseValid(notification_id)) {
            throw new AppException('Notification id invalid!')
        }

        return next()
    }
}

export { UpdateNotificationValidator }
