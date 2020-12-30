import { Entity, ObjectIdColumn, Column, CreateDateColumn, DeleteDateColumn, ObjectID } from 'typeorm'
import { IEmotionReport } from '@modules/emotion/shared/models/schemas/IEmotionReport'
import { Expose, Exclude } from 'class-transformer'

@Entity('emotions_report')
class MongoEmotionReport implements IEmotionReport {
    @Expose({ name: 'emotion_report_id' })
    @ObjectIdColumn()
    public _id: ObjectID

    @Column()
    public emotion_id: string

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

export { MongoEmotionReport }
