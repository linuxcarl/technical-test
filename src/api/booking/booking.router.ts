import express, { NextFunction, Request, Response } from 'express'
import { ReflectiveInjector } from 'injection-js'
import { BaseRepository } from '../../repository/base.repository'
import { BookingMocksRepository } from '../../repository/implementation/mocks/booking.repository.imp'
import { BookingController } from './booking.controller'
import { BookingService } from './booking.service'

const router = express.Router()

const injected = ReflectiveInjector.resolveAndCreate([
  BookingController,
  BookingService,
  { provide: BaseRepository, useClass: BookingMocksRepository },
])
const controller = injected.get(BookingController)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  controller.list(req, res, next)
})

export default router
