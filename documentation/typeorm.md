# Typeorm

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

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
                        type: 'varchar',
                        isUnique: true,
                        isPrimary: true,
                        isNullable: false,
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
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'deleted_at',
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
                        type: 'varchar',
                        isUnique: true,
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'owner_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'deleted_at',
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
                name: 'emotion_owner',
                columnNames: ['owner_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('emotions')
    }
}
```

## Exeplo de uma migration com relações

```typescript
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateUserTokens1608781060450 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_tokens',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isUnique: true,
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'owner_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'token',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'UserTokens',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['owner_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_tokens')
    }
}
```
