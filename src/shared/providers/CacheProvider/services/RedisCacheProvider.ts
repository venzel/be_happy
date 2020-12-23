import { ICacheProvider } from '../models/ICacheProvider'
import IORedis, { Redis } from 'ioredis'
import { cache_host, cache_port, cache_key_prefix } from '@configs/cache'

class RedisCacheProvider implements ICacheProvider {
    private _cache: Redis

    constructor() {
        this._cache = new IORedis(cache_port, cache_host, { keyPrefix: cache_key_prefix })
    }

    public async save(key: string, value: string | boolean, time_to_expires: number): Promise<void> {
        value = JSON.stringify(value)

        await this._cache.set(key, value, 'EX', time_to_expires)
    }

    public async findByKey(key: string): Promise<JSON | null> {
        const cache: string | null = await this._cache.get(key)

        return cache ? JSON.parse(cache) : null
    }

    public async invalidate(key: string): Promise<void> {
        await this._cache.del(key)
    }

    public async clearAllCacheByPrefix(prefix: string): Promise<void> {
        const keys: string[] = await this._cache.keys(`${cache_key_prefix}:${prefix}:*`)

        if (!keys.length) return

        const keysWithoutPrefix = keys.map((key) => key.replace(`${cache_key_prefix}:`, ''))

        await this._cache.del(keysWithoutPrefix)
    }
}

export { RedisCacheProvider }
