import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { PostgresUserEntity } from '@modules/user/shared/infra/typeorm/postgres/entities/PostgresUserEntity'
import { Expose, Exclude } from 'class-transformer'

@Entity('emotions')
class PostgresEmotionEntity implements IEmotionEntity {
    @Expose({ name: 'emotion_id' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public owner_id: string

    @ManyToOne(() => PostgresUserEntity)
    @JoinColumn({ name: 'owner_id' })
    public owner: PostgresUserEntity

    @Column()
    public type: string

    @Column()
    public description: string

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public updated_at: Date

    @Exclude()
    @DeleteDateColumn()
    public deleted_at: Date | null
}

export { PostgresEmotionEntity }
