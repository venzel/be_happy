import 'reflect-metadata'
import 'dotenv/config'
import express, { Express } from 'express'
import { dbConnection } from '../typeorm/ConnectionDB'
import { middleware } from './Middleware'

class App {
    public execute(): Express {
        const app: Express = express()

        dbConnection.use(app)

        middleware.use(app)

        return app
    }
}

const app = new App()

export { app }
