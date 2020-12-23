import { IRedisConfigDTO } from './dtos/IRedisConfigDTO'

const _redisHost = (): string => {
    const env = process.env.REDIS_HOST
    if (!env) throw new Error('Error in var ambient: REDIS_HOST!')
    return env
}

const _redisPort = (): string => {
    const env = process.env.REDIS_PORT
    if (!env) throw new Error('Error in var ambient: REDIS_PORT!')
    return env
}

const _redisKeyPrefix = (): string => {
    const env = process.env.REDIS_KEY_PREFIX
    if (!env) throw new Error('Error in var ambient: REDIS_KEY_PREFIX!')
    return env
}

const config: IRedisConfigDTO = {
    redis_host: _redisHost(),
    redis_port: _redisPort(),
    redis_key_prefix: _redisKeyPrefix(),
}

const { redis_host, redis_port, redis_key_prefix } = config

export { redis_host }
export { redis_port }
export { redis_key_prefix }
