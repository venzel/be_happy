interface ICreateUserDTO {
    user_id?: string
    name: string
    email: string
    password: string
    role?: string
    activated?: boolean
    allowed?: boolean
}

export { ICreateUserDTO }
