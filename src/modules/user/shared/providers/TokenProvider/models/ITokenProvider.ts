interface ITokenProvider {
    generateToken(payload: string): Promise<string>
    validateToken(token: string): void
}

export { ITokenProvider }
