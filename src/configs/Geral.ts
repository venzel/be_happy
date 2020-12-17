import 'dotenv/config'

class Geral {
    public environment: string
    public server_port: string
    public api_host: string
    public base_dir: string
    public token_secret: string
    public token_secret_refresh: string
    public token_expires: number

    public constructor() {
        this.setup()
    }

    private _environment(): void {
        const env: string | undefined = process.env.NODE_ENV

        if (!env) {
            throw new Error('Error in var ambient: NODE_ENV!')
        }

        this.environment = env
    }

    private _port(): void {
        const env: string | undefined = process.env.SERVER_PORT

        if (!env) {
            throw new Error('Error in var ambient: SERVER_PORT!')
        }

        this.server_port = env
    }

    private _apihost(): void {
        const env: string | undefined = process.env.API_HOST

        if (!env) {
            throw new Error('Error in var ambient: API_HOST!')
        }

        this.api_host = env + ':' + this.server_port
    }

    private _basedir(): void {
        this.base_dir = this.environment === 'development' ? '/src' : '/dist'
    }

    private _tokensecret(): void {
        const env: string | undefined = process.env.TOKEN_SECRET

        if (!env) {
            throw new Error('Error in var ambient: TOKEN_SECRET!')
        }

        this.token_secret = env
    }

    private _tokensecretrefresh(): void {
        const env: string | undefined = process.env.TOKEN_SECRET_REFRESH

        if (!env) {
            throw new Error('Error in var ambient: TOKEN_SECRET_REFRESH!')
        }

        this.token_secret_refresh = env
    }

    private _tokenexpires(): void {
        const env: string | undefined = process.env.TOKEN_EXPIRES

        if (!env) {
            throw new Error('Error in var ambient: TOKEN_EXPIRES!')
        }

        this.token_expires = Number(env)
    }

    public setup(): void {
        this._environment()
        this._port()
        this._apihost()
        this._basedir()
        this._tokensecret()
        this._tokensecretrefresh()
        this._tokenexpires()
    }
}

const {
    environment,
    server_port,
    api_host: api_url,
    base_dir,
    token_secret,
    token_secret_refresh,
    token_expires,
} = new Geral()

export { environment }
export { server_port }
export { api_url }
export { base_dir }
export { token_secret }
export { token_secret_refresh }
export { token_expires }
