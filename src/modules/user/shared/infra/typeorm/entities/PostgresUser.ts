import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm'
import { Exclude, Expose } from 'class-transformer'
import { api_url } from '@configs/geral'
import { IUser } from '@modules/user/shared/entities/IUser'

@Entity('users')
class PostgresUser implements IUser {
    @Expose({ name: 'user_id' })
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public name: string

    @Column()
    public email: string

    @Exclude()
    @Column()
    public password: string

    @Column()
    public role: string

    @Expose({ name: 'avatar_file' })
    @Column()
    public avatar: string

    @Expose({ name: 'avatar_url' })
    get getAvatarUrl(): string | null {
        return this.avatar ? `${api_url}/file/${this.avatar}` : null
    }

    @Exclude()
    @Column()
    public allowed: boolean

    @Column()
    public activated: boolean

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public updated_at: Date

    @Exclude()
    @DeleteDateColumn()
    public deleted_at: Date | null
}

export { PostgresUser }
