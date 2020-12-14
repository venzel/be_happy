# Typeorm

[README.md](../README.md)

## Registrar a CLI e outros através de scripts

```JSON
"scripts": {
        "typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
        "migration": "yarn typeorm migration:run"
    }
```

## Aquivo de configuração do typeorm: ormconfig.json

```JSON
[
    {
        "type": "postgres",
        "host": "localhost",
        "port": 6870,
        "username": "",
        "password": "",
        "database": "",
        "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
        "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeorm/migrations"
        }
    },
    {
        "type": "mongodb",
        "host": "localhost",
        "port": 27017,
        "database": "",
        "synchronize": true,
        "logging": false,
        "useUnifiedTopology": true,
        "entities": ["./src/modules/**/infra/typeorm/schemas/*.ts"],
        "migrations": ["./src/shared/infra/typeorm/migrations/mongodb/*.ts"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeorm/migrations/mongodb"
        }
    }
]
```

## Criação de uma nova migration

```bash
$ yarn typeorm migration:create -n <NameMigrateCammonCase>
```

## Executa a migration

```bash
$ yarn typeorm migration:run
```

# Reverte as mudanças na migration anterior

```bash
$ yarn typeorm migration:revert
```

# Dropar um schema

```bash
$ yarn typeorm schema:drop
```
