import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    DeleteDateColumn,
} from 'typeorm'
import { IEmotionReport } from '@modules/emotion/shared/entities/IEmotionReport'
import { IEmotion } from '@modules/emotion/shared/entities/IEmotion'
import { User } from '@modules/user/shared/infra/typeorm/entities/User'
import { Expose, Exclude } from 'class-transformer'
import { Emotion } from './Emotion'

@Entity('emotionreport')
class EmotionReport implements IEmotionReport {
    @Expose({ name: 'emotionId' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public emotionId: string

    @ManyToOne(() => Emotion)
    @JoinColumn({ name: 'emotionId' })
    public emotionOwner: IEmotion

    @Column()
    public ownerId: string

    @Column()
    public read: boolean

    @CreateDateColumn()
    public createdAt: Date

    @Exclude()
    @DeleteDateColumn()
    public deletedAt: Date | null
}

export { EmotionReport }
