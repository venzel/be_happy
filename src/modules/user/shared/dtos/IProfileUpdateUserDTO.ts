interface IProfileUpdateUserDTO {
    ownerId: string
    name: string
    email: string
    oldPassword: string
    newPassword: string
}

export { IProfileUpdateUserDTO }
