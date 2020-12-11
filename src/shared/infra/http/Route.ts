import { Router, Request, Response } from 'express'

class Route {
    public static execute(): Router {
        const router: Router = Router()

        router.get('/user', (req: Request, res: Response) => {
            res.json({ router: true })
        })

        return router
    }
}

const route: Router = Route.execute()

export { route }
