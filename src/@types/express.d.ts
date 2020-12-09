interface IAuth {
    ownerId: string
    role: string
    activated: boolean
}

declare namespace Express {
    export interface Request {
        auth: IAuth
    }
}
