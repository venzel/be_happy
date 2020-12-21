interface IHashProvider {
    gererateHash(payload: string): Promise<string>

    compareHash(payload: string, hashed: string): Promise<boolean>
}

export { IHashProvider }
