import { app } from './App'
import { server_port, api_url } from '@configs/Geral'

class Server {
    public static execute(): void {
        app.listen(server_port, () => {
            console.log(`Server listen in port ${server_port}!`)
        })
    }
}

Server.execute()
