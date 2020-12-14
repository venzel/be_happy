import { Express } from 'express'
import { createConnections } from 'typeorm'

class ConnectionDB {
    public static async execute(app: Express): Promise<void> {
        await createConnections()
            .then(() => {
                app.emit('connected')
            })
            .catch(() => {
                console.log('Database connection error!')
            })
    }
}

const dbConnection = ConnectionDB.execute

export { dbConnection }
