import 'reflect-metadata'
import express, { Express } from 'express'
import { dbConnection } from '../typeorm/ConnectionDB'
import { middleware } from './Middleware'

class App {
    public static execute(): Express {
        const app: Express = express()

        dbConnection(app)

        middleware(app)

        return app
    }
}

const app: Express = App.execute()

export { app }
