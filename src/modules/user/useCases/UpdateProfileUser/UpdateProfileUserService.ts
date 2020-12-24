import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IProfileUpdateUserDTO } from '@modules/user/shared/dtos/IProfileUpdateUserDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class UpdateProfileUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('HashProvider') private _hashProvider: IHashProvider
    ) {}

    public async execute(data: IProfileUpdateUserDTO): Promise<IUser> {
        const { owner_id, name, email, current_password } = data

        const existsUserWithEmail: IUser | undefined = await this._userRepository.findOneByEmail(email)

        if (existsUserWithEmail && existsUserWithEmail.id !== owner_id)
            throw new AppException('User email already exists!', 400)

        const existsUserWithId: IUser | undefined = await this._userRepository.findOneById(owner_id)

        if (!existsUserWithId) throw new AppException('User not exists!', 404)

        const passwordEquals: boolean = await this._hashProvider.compareHash(
            current_password,
            existsUserWithId.password
        )

        if (!passwordEquals) throw new AppException('Password not equals!', 400)

        /* Data updated */

        existsUserWithId.name = name
        existsUserWithId.email = email

        /* End data updated */

        const savedUser = await this._userRepository.save(existsUserWithId)

        return savedUser
    }
}

export { UpdateProfileUserService }
