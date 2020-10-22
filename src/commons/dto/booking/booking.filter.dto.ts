import { FilterDto } from '../filter.dto'

export interface bookingFilterDto extends FilterDto {
  psy?: string
  pattient?: string
}
