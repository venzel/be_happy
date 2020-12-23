import express, { Express } from 'express'
import { route } from './Route'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'
import '@shared/containers'
import * as Sentry from '@sentry/node'
import { sentry_dsn } from '@configs/sentry'
import { environment } from '@configs/geral'
import { exception } from './Exception'

class Middleware {
    public static execute(app: Express): void {
        app.use(cors())

        if (environment !== 'development') {
            Sentry.init({ dsn: sentry_dsn, tracesSampleRate: 1.0 })

            app.use(Sentry.Handlers.requestHandler())
        }

        app.use(helmet())

        app.use(express.urlencoded({ extended: true }))

        app.use(express.json())

        app.use(route())

        if (environment !== 'development') {
            app.use(Sentry.Handlers.errorHandler())
        }

        app.use(exception)
    }
}

const middleware = Middleware.execute

export { middleware }
