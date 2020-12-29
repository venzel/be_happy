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
import { INotification } from '@modules/notification/shared/schemas/INotification'

@Entity('notifications')
class MongoNotification implements INotification {
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

export { MongoNotification }
