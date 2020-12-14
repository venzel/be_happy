import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm'
import { Exclude, Expose } from 'class-transformer'
import { api_url } from '@configs/Geral'

import { IUser } from '@modules/user/shared/entities/IUser'

@Entity('users')
class User implements IUser {
    @Expose({ name: 'userId' })
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

    @Expose({ name: 'avatarFile' })
    @Column()
    public avatar: string

    @Expose({ name: 'avatarUrl' })
    get getAvatarUrl(): string | null {
        return this.avatar ? `${api_url}/file/${this.avatar}` : null
    }

    @Exclude()
    @Column()
    public allowed: boolean

    @Exclude()
    @Column()
    public activated: boolean

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @Exclude()
    @DeleteDateColumn()
    public deletedAt: Date | null
}

export { User }
