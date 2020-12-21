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
    public id: string

    @Column()
    public ownerId: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'ownerId' })
    public owner: User

    @Column()
    public emotion: string

    @Column()
    public description: string

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @Exclude()
    @DeleteDateColumn()
    public deletedAt: Date | null
}

export { Emotion }
