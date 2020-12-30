import {
    Entity,
    BeforeInsert,
    ObjectIdColumn,
    ObjectID,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Expose } from 'class-transformer'
import { INotificationSchema } from '@modules/notification/shared/models/schemas/INotificationSchema'

@Entity('notifications')
class MongoNotificationSchema implements INotificationSchema {
    @Expose({ name: 'notification_id' })
    @ObjectIdColumn()
    public _id: ObjectID

    @Column()
    public owner_id: string

    @Column()
    public content: string

    @Column({ nullable: false, select: false })
    public read: boolean

    @BeforeInsert()
    beforeInsertActions() {
        this.read = false
    }

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public updated_at: Date
}

export { MongoNotificationSchema }
