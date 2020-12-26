import { Router } from 'express'

class ListEmotionMiddleware {
    public register(router: Router, path: string): void {
        router.get(path, (req, res) => {
            return res.json({ listEmotions: true })
        })
    }
}

export { ListEmotionMiddleware }
