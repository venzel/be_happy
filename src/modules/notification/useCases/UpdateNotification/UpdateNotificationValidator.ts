import { Request, Response, NextFunction } from 'express'
import { isIdMongooseValid } from '@shared/libs/RegEx'
import { AppException } from '@shared/exceptions/AppException'

class UpdateNotificationValidator {
    public validator(req: Request, res: Response, next: NextFunction): any {
        const notificationId: string | undefined = req.query.id?.toString()

        if (!notificationId || !isIdMongooseValid(notificationId))
            throw new AppException('Id notification invalid!')

        return next()
    }
}

export { UpdateNotificationValidator }
