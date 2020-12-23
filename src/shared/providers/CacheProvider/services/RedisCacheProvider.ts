import { ICacheProvider } from '../models/ICacheProvider'

class RedisCacheProvider implements ICacheProvider {
    public async save(key: string, value: string, time_to_expires: number): Promise<void> {}

    public async recovery(key: string): Promise<JSON | null> {
        return null
    }

    public async invalidate(key: string): Promise<void> {}

    public async clearByPrefix(prefix: string): Promise<void> {}
}

export { RedisCacheProvider }
