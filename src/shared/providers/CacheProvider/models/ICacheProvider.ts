interface ICacheProvider {
    save(key: string, value: string | boolean, time_to_expires: number): Promise<void>

    findByKey(key: string): Promise<JSON | null>

    invalidate(key: string): Promise<void>

    clearAllCacheByPrefix(prefix: string): Promise<void>
}

export { ICacheProvider }
