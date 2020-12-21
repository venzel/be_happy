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
                        name: 'owner_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'emotion',
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
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('emotions')
    }
}
