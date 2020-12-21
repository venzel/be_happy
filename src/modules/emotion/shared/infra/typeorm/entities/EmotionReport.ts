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
    @Expose({ name: 'emotion_id' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public emotion_id: string

    @ManyToOne(() => Emotion)
    @JoinColumn({ name: 'emotion_id' })
    public emotion_owner: IEmotion

    @Column()
    public owner_id: string

    @Column()
    public read: boolean

    @CreateDateColumn()
    public created_at: Date

    @Exclude()
    @DeleteDateColumn()
    public deleted_at: Date | null
}

export { EmotionReport }
