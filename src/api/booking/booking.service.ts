import { Injectable } from 'injection-js'
import { IBookingCreateDto } from '../../commons/dto/booking/booking-create.dto'
import { BookingFilterDto } from '../../commons/dto/booking/booking.filter.dto'
import { BaseRepository } from '../../repository/base.repository'
import { IBooking } from '../../repository/domains/booking'

@Injectable()
export class BookingService {
  public constructor(private readonly baseRepository: BaseRepository) {}

  public async list(filter?: BookingFilterDto): Promise<IBooking[]> {
    const result = await this.baseRepository.all('booking', filter)
    return result as IBooking[]
  }

  public async create(data: IBookingCreateDto): Promise<IBooking> {
    const dates = { created_at: new Date(), updated_at: null }
    const result = await this.baseRepository.create({ ...data, ...dates })
    return result as IBooking
  }
}
