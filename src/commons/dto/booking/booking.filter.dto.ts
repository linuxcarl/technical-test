import { FilterDto } from '../filter.dto'

export interface BookingFilterDto extends FilterDto {
  psy?: string
  pattient?: string
}
