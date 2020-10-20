import { Request, Response } from 'express'

export abstract class BaseController {
  public success<T>(req: Request, res: Response, body: T, status = 200): void {
    res.status(status).send({ body })
  }
}
