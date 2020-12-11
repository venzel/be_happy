import { Request, Response } from 'express'

class CreateUserController {
    public async create(req: Request, res: Response): Promise<Response> {
        return res.status(201).json(false)
    }
}

export { CreateUserController }
