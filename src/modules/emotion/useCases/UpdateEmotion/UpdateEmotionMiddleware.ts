import { Router } from 'express'

class UpdateEmotionMiddleware {
    public register(router: Router, path: string): void {
        router.put(path, (req, res) => {
            return res.json({ updateEmotions: true })
        })
    }
}

export { UpdateEmotionMiddleware }
