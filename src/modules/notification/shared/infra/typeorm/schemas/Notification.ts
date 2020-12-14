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
import { INotification } from '@modules/notification/shared/entities/INotification'

@Entity('notification')
class Notification implements INotification {
    @Expose({ name: 'notificationId' })
    @ObjectIdColumn()
    public _id: ObjectID

    @Column('uuid')
    public ownerId: string

    @Column()
    public content: string

    @Column({ nullable: false, select: false })
    public read: boolean

    @BeforeInsert()
    beforeInsertActions() {
        this.read = false
    }

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date
}

export { Notification }
