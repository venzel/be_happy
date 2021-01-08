require('dotenv').config()

module.exports = [
    {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: process.env.DB_POSTGRES_PORT,
        username: process.env.DB_POSTGRES_USER,
        password: process.env.DB_POSTGRES_PASSWORD,
        database: process.env.DB_POSTGRES_NAME,
        synchronize: true,
        entities: ['src/modules/**/shared/infra/typeorm/postgres/entities/*.ts'],
        migrations: ['src/shared/infra/typeorm/postgres/migrations/*.ts'],
        cli: {
            migrationsDir: 'src/shared/infra/typeorm/postgres/migrations',
        },
    },
    {
        name: 'mongodb',
        type: 'mongodb',
        host: 'localhost',
        port: process.env.DB_MONGO_PORT,
        username: 'api_user',
        password: 'api1234',
        database: 'api_dev_db',
        synchronize: true,
        logging: false,
        useUnifiedTopology: true,
        entities: ['src/modules/**/shared/infra/typeorm/mongodb/schemas/*.ts'],
    },
]
