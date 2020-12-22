class Utils {
    public statusMessage(error: boolean, code: number, message: string): any {
        return { error, code, message }
    }
}

const { statusMessage } = new Utils()

export { statusMessage }
