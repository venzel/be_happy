import express, { Express } from 'express'
import { route } from './Route'

class Middleware {
    public static execute(app: Express): void {
        app.use(express.json())

        app.use(route)
    }
}

const middleware = Middleware.execute

export { middleware }
