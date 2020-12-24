import { injectable, inject } from 'tsyringe'
import { IHashProvider } from '@modules/user/shared/providers/HashProvider/models/IHashProvider'
import { IUserRepository } from '@modules/user/shared/repositories/IUserRepository'
import { IUpdatePasswordDTO } from '@modules/user/shared/dtos/IUpdatePasswordDTO'
import { IUser } from '@modules/user/shared/entities/IUser'
import { AppException } from '@shared/exceptions/AppException'

@injectable()
class UpdatePasswordUserService {
    constructor(
        @inject('UserRepository') private _userRepository: IUserRepository,
        @inject('HashProvider') private _hashProvider: IHashProvider
    ) {}

    public async execute(data: IUpdatePasswordDTO): Promise<IUser> {
        const { current_password, new_password, owner_id } = data

        const existsUserWithId: IUser | undefined = await this._userRepository.findOneById(owner_id)

        if (!existsUserWithId) throw new AppException('User not exists!', 404)

        const isPasswordEquals: boolean = await this._hashProvider.compareHash(
            current_password,
            existsUserWithId.password
        )

        if (!isPasswordEquals) throw new AppException('Password not equals!', 400)

        const generatedHashPassword = await this._hashProvider.gererateHash(new_password)

        /* Data updated */

        existsUserWithId.password = generatedHashPassword

        /* End data updated */

        const savedUser: IUser = await this._userRepository.save(existsUserWithId)

        return savedUser
    }
}

export { UpdatePasswordUserService }
