class AppException {
    public readonly message: string
    public readonly statusCode: number

    constructor(message?: string, statusCode?: number) {
        this.message = message || 'Error by user!'
        this.statusCode = statusCode || 400
    }
}

export { AppException }
