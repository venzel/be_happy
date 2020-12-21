class Utils {
    public statusMessage(error: boolean, status_code: number, message: string): any {
        return { error, status_code, message }
    }
}

const { statusMessage } = new Utils()

export { statusMessage }
