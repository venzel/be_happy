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
import { TypeormUser } from '@modules/user/shared/infra/typeorm/entities/TypeormUser'
import { Expose, Exclude } from 'class-transformer'

@Entity('emotions')
class TypeormEmotion implements IEmotion {
    @Expose({ name: 'emotion_id' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public owner_id: string

    @ManyToOne(() => TypeormUser)
    @JoinColumn({ name: 'owner_id' })
    public owner: TypeormUser

    @Column()
    public emotion: string

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

export { TypeormEmotion }
