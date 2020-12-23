import 'dotenv/config'
import { IGeralConfigDTO } from './dtos/IGeralConfigDTO'

const _environment = (): string => {
    const env = process.env.NODE_ENV
    if (!env) throw new Error('Error in var ambient: NODE_ENV!')
    return env
}

const _serverPort = (): string => {
    const env = process.env.SERVER_PORT
    if (!env) throw new Error('Error in var ambient: SERVER_PORT!')
    return env
}

const _apiHost = (): string => {
    const env = process.env.API_HOST
    if (!env) throw new Error('Error in var ambient: API_HOST!')
    return env
}

const _emailAdmin = (): string => {
    const env = process.env.API_HOST
    if (!env) throw new Error('Error in var ambient: API_HOST!')
    return env
}

const config: IGeralConfigDTO = {
    environment: _environment(),
    server_port: _serverPort(),
    api_host: _apiHost(),
    email_admin: _emailAdmin(),
}

const { environment, server_port, api_host, email_admin } = config

export { environment }
export { server_port }
export { api_host }
export { email_admin }
