import 'reflect-metadata'
import 'dotenv/config'
import express, { Express } from 'express'
import { middleware } from './Middleware'

class App {
    public static execute(): Express {
        const app: Express = express()

        middleware(app)

        return app
    }
}

const app: Express = App.execute()

export { app }
