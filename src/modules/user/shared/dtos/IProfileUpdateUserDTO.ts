interface IProfileUpdateUserDTO {
    userId: string
    name: string
    email: string
    oldPassword: string
    newPassword: string
}

export { IProfileUpdateUserDTO }
