interface ICreateUserDTO {
    name: string
    email: string
    password: string
    role: string
    activated?: boolean
    allowed?: boolean
}

export { ICreateUserDTO }
