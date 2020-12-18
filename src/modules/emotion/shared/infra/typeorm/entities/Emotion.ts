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
import { User } from '@modules/user/shared/infra/typeorm/entities/User'
import { Expose, Exclude } from 'class-transformer'

@Entity('emotions')
class Emotion implements IEmotion {
    @Expose({ name: 'emotionId' })
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    ownerId: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'ownerId' })
    public owner: User

    @Column()
    emotion: string

    @Column()
    description: string | null

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Exclude()
    @DeleteDateColumn()
    deletedAt: Date | null
}

export { Emotion }
