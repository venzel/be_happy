interface ICacheConfigDTO {
    cache_host: string
    cache_port: number
    cache_key_prefix: string
}

const _cacheHost = (): string => {
    const env = process.env.CACHE_HOST
    if (!env) throw new Error('Error in var ambient: REDIS_HOST!')
    return env
}

const _cachePort = (): number => {
    const env = process.env.CACHE_PORT
    if (!env) throw new Error('Error in var ambient: CACHE_PORT!')
    return Number(env)
}

const _cacheKeyPrefix = (): string => {
    const env = process.env.CACHE_KEY_PREFIX
    if (!env) throw new Error('Error in var ambient: CACHE_KEY_PREFIX!')
    return env + ':'
}

const config: ICacheConfigDTO = {
    cache_host: _cacheHost(),
    cache_port: _cachePort(),
    cache_key_prefix: _cacheKeyPrefix(),
}

const { cache_host, cache_port, cache_key_prefix } = config

export { cache_host }
export { cache_port }
export { cache_key_prefix }
