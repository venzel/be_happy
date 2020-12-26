import { Express } from 'express'
import { createConnections } from 'typeorm'

class ConnectionDB {
    public async use(app: Express): Promise<void> {
        await createConnections()
            .then(() => {
                app.emit('connected')
            })
            .catch(() => {
                console.log('Database connection error!')
            })
    }
}

const dbConnection = new ConnectionDB()

export { dbConnection }
