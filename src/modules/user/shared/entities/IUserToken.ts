interface IUserToken {
    id: string
    owner_id: string
    token: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

export { IUserToken }
