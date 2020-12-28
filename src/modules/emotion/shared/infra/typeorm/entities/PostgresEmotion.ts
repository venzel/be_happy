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
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { PostgresUser } from '@modules/user/shared/infra/typeorm/entities/PostgresUser'
import { Expose, Exclude } from 'class-transformer'

@Entity('emotions')
class PostgresEmotion implements IEmotion {
    @Expose({ name: 'emotion_id' })
    @PrimaryGeneratedColumn('rowid')
    public id: string

    @Column()
    public owner_id: string

    @ManyToOne(() => PostgresUser)
    @JoinColumn({ name: 'owner_id' })
    public owner: PostgresUser

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

export { PostgresEmotion }
