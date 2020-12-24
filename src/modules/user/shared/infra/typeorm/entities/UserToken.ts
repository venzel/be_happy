import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
} from 'typeorm'
import { Expose } from 'class-transformer'
import { IUserToken } from '@modules/user/shared/entities/IUserToken'

@Entity('user_tokens')
class UserToken implements IUserToken {
    @Expose({ name: 'token_user_Id' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public owner_id: string

    @Column()
    @Generated('uuid')
    public token: string

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public updated_at: Date
}

export { UserToken }
