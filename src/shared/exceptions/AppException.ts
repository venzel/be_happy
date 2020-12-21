class AppException {
    public readonly message: string
    public readonly status_code: number

    constructor(message?: string, status_code?: number) {
        this.message = message || 'Error by user!'
        this.status_code = status_code || 400
    }
}

export { AppException }
