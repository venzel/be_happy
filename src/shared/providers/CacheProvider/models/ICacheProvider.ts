interface ICacheProvider {
    save(key: string, value: string, time_to_expires: number): Promise<void>

    recovery(key: string): Promise<JSON | null>

    invalidate(key: string): Promise<void>

    clearAllCacheByPrefix(prefix: string): Promise<void>
}

export { ICacheProvider }
