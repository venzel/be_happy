import { Router } from 'express'
import multer from 'multer'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { UpdateAvatarUserController } from './UpdateAvatarUserController'
import storage from '@configs/Storage'

class UpdateAvatarUserRoute {
    public register(router: Router, path: string) {
        const upload = multer(storage)

        const { authenticate } = new AuthenticateUserMiddleware()
        const { update } = new UpdateAvatarUserController()

        router.patch(path, authenticate, upload.single('avatar'), update)
    }
}

export { UpdateAvatarUserRoute }
