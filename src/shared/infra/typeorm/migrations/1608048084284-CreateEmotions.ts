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
            })
        )

        await queryRunner.createForeignKey(
            'emotions',
            new TableForeignKey({
                name: 'EmotionsOwner',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['owner_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('emotions')
    }
}
