class Utils {
    public generateStatus(error: boolean, code: number, message: string): any {
        return { error, code, message }
    }
}

const { generateStatus } = new Utils()

export { generateStatus }
