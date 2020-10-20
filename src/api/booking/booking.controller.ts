import 'reflect-metadata'
import { Injectable } from 'injection-js'
import { NextFunction, Request, Response } from 'express'
import { BaseController } from '../../commons/controller/base.controller'
import { BookingService } from './booking.service'

@Injectable()
export class BookingController extends BaseController {
  public constructor(private readonly bookingService: BookingService) {
    super()
  }

  public async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.bookingService.list()
      this.success(req, res, result, 200)
    } catch (e) {
      next(e)
    }
  }
}
