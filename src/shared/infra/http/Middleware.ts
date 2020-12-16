import express, { Express } from 'express'
import { route } from './Route'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'
import '@shared/containers'
import { exception } from './Exception'

class Middleware {
    public static execute(app: Express): void {
        app.use(cors())

        app.use(helmet())

        app.use(express.urlencoded({ extended: true }))

        app.use(express.json())

        app.use(route())

        app.use(exception)
    }
}

const middleware = Middleware.execute

export { middleware }
