import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Generated,
} from 'typeorm'
import { Expose, Exclude } from 'class-transformer'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'

@Entity('users')
class UserToken implements IUserToken {
    @Expose({ name: 'tokenUserId' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public ownerId: string

    @Column()
    @Generated('uuid')
    public token: string

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @Exclude()
    @DeleteDateColumn()
    public deletedAt: Date | null
}

export { UserToken }
