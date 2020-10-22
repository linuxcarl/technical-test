/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookingFilterDto } from '../../../commons/dto/booking/booking.filter.dto'
import { collectionsDb } from '../../../commons/types/collections.types'
import { BaseRepository } from '../../base.repository'
import { IBooking } from '../../domains/booking'
import { IBookingCreateDto } from '../../../commons/dto/booking/booking-create.dto'
import { modelBooking } from '../../models/booking'

export class BookingMongoRepository extends BaseRepository {
  public constructor() {
    super()
  }

  public async create(data: IBookingCreateDto): Promise<IBooking> {
    const saveData = new modelBooking(data)
    const result = saveData.save()

    return (result as unknown) as IBooking
  }
}
