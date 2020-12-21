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
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "port": 6870,
        "username": "",
        "password": "",
        "database": "",
        "entities": ["./src/modules/**/shared/infra/typeorm/entities/*.ts"],
        "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeorm/migrations"
        }
    },
    {
        "name": "mongo",
        "type": "mongodb",
        "host": "localhost",
        "port": 27017,
        "database": "",
        "synchronize": true,
        "logging": false,
        "useUnifiedTopology": true,
        "entities": ["./src/modules/**/shared/infra/typeorm/schemas/*.ts"]
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

## Reverte as mudanças na migration anterior

```bash
$ yarn typeorm migration:revert
```

## Dropar um schema

```bash
$ yarn typeorm schema:drop
```

## Exeplo de uma migration simples

```typescript
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateUsers1607975202667 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                        isPrimary: true,
                        isNullable: false,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'role',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'allowed',
                        type: 'boolean',
                        default: true,
                    },
                    {
                        name: 'activated',
                        type: 'boolean',
                        default: false,
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'deletedAt',
                        type: 'timestamp',
                        isNullable: true,
                        default: null,
                    },
                ],
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}
```

## Exeplo de uma migration com relações

```typescript
import { MigrationInterface, QueryRunner, TableForeignKey, Table } from 'typeorm'

export default class CreateEmotions1608048084284 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'emotions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                        isPrimary: true,
                        isNullable: false,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'ownerId',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'emotion',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'deletedAt',
                        type: 'timestamp',
                        isNullable: true,
                        default: null,
                    },
                ],
            }),
            true
        )

        await queryRunner.createForeignKey(
            'emotions',
            new TableForeignKey({
                name: 'emotionOwner',
                columnNames: ['ownerId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('emotions')
    }
}
```
