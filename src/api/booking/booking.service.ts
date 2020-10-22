import { Injectable } from 'injection-js'
import { FilterDto } from '../../commons/dto/filter.dto'
import { BaseRepository } from '../../repository/base.repository'
import { IBooking } from '../../repository/domains/booking'

@Injectable()
export class BookingService {
  public constructor(private readonly baseRepository: BaseRepository) {}

  public async list(filter?: FilterDto): Promise<IBooking[]> {
    const result = await this.baseRepository.all('booking', filter)
    return result as IBooking[]
  }
}
