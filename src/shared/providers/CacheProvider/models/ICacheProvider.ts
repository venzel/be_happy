interface ICacheProvider {
    save(key: string, value: string, time_to_expires: number): Promise<void>

    recovery(key: string): Promise<JSON | null>

    invalidate(key: string): Promise<void>

    clearByPrefix(prefix: string): Promise<void>
}

export { ICacheProvider }
