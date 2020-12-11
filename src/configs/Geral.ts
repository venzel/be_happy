class Geral {
    public environment: string | null
    public server_port: string | null
    public api_url: string | null
    public base_dir: string | null

    public constructor() {
        this.setup()
    }

    private _environment(): void {
        const env = process.env.NODE_ENV
        this.environment = env ? env : null
    }

    private _port(): void {
        const port = process.env.SERVER_PORT
        this.server_port = port ? port : null
    }

    private _apiurl(): void {
        const api_url = process.env.API_URL
        this.api_url = api_url ? api_url + ':' + this.server_port : null
    }

    private _basedir(): void {
        this.base_dir = this.environment === 'development' ? '/src' : '/dist'
    }

    public setup(): void {
        this._environment()
        this._port()
        this._apiurl()
        this._basedir()
    }
}

const { environment, server_port, api_url, base_dir } = new Geral()

export { environment }
export { server_port }
export { api_url }
export { base_dir }
