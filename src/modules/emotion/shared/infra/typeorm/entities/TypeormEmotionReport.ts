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
import { Expose, Exclude } from 'class-transformer'
import { TypeormEmotion } from './TypeormEmotion'

@Entity('emotions_report')
class TypeormEmotionReport implements IEmotionReport {
    @Expose({ name: 'emotion_id' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public emotion_id: string

    @ManyToOne(() => TypeormEmotion)
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

export { TypeormEmotionReport }
