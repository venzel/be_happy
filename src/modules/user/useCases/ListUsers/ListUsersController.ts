import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

class ListUsersController {
    public async handle(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ status: true })
    }
}

export { ListUsersController }
