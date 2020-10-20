import express, { NextFunction, Request, Response } from 'express'
import { ReflectiveInjector } from 'injection-js'
import { BookingController } from './booking.controller'
import { BookingService } from './booking.service'

const router = express.Router()

const injected = ReflectiveInjector.resolveAndCreate([BookingController, BookingService])
const controller = injected.get(BookingController)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  controller.list(req, res, next)
})

export default router
