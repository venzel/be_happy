import { app } from './App'
import { server_port } from '@configs/geral'

class Server {
    public static execute(): void {
        app.on('connected', () => {
            console.log('Connected in databases!')

            app.listen(server_port, () => {
                console.log(`Server listen in port ${server_port}!`)
            })
        })
    }
}

Server.execute()
