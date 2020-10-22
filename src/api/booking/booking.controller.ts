/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
import { Injectable } from 'injection-js'
import { NextFunction, Request, Response } from 'express'
import { BaseController } from '../../commons/controller/base.controller'
import { BookingService } from './booking.service'
import { FilterDto } from '../../commons/dto/filter.dto'

@Injectable()
export class BookingController extends BaseController {
  public constructor(private readonly bookingService: BookingService) {
    super()
  }

  public async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { limit, offset = 0, order, page = 1, all }: FilterDto = req.query
    try {
      const result = await this.bookingService.list({
        limit,
        offset,
        order,
        page,
        all,
      })
      this.success(req, res, result, 200)
    } catch (e) {
      next(e)
    }
  }
}
