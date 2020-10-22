/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
import { Injectable } from 'injection-js'
import { NextFunction, Request, Response } from 'express'
import { BaseController } from '../../commons/controller/base.controller'
import { BookingService } from './booking.service'
import { FilterDto } from '../../commons/dto/filter.dto'
import { BookingFilterDto } from '../../commons/dto/booking/booking.filter.dto'

@Injectable()
export class BookingController extends BaseController {
  public constructor(private readonly bookingService: BookingService) {
    super()
  }

  public async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { limit, offset = 0, order, page = 1, pattient, psy }: BookingFilterDto = req.query
    try {
      const result = await this.bookingService.list({
        limit,
        offset,
        order,
        page,
        pattient,
        psy,
      })
      this.success(req, res, result, 200)
    } catch (e) {
      next(e)
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { start_time, end_time, duration, psy, pattient } = req.body
    try {
      const result = await this.bookingService.create({
        start_time,
        end_time,
        duration,
        psy,
        pattient,
      })
      this.success(req, res, result, 200)
    } catch (e) {
      next(e)
    }
  }
}
