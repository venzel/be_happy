import { Router } from 'express'
import multer from 'multer'
import { AuthenticateUserMiddleware } from '@modules/user/shared/middlewares/AuthenticateUserMiddleware'
import { UpdateAvatarUserController } from './UpdateAvatarUserController'
import options from '@configs/storage'

class UpdateAvatarUserRoute {
    public register(router: Router, path: string) {
        const upload = multer(options)

        const { authenticate } = new AuthenticateUserMiddleware()
        const { update } = new UpdateAvatarUserController()

        router.patch(path, authenticate, upload.single('avatar'), update)
    }
}

export { UpdateAvatarUserRoute }
