import { TrueFalseTypes } from '../types/true-false.types'
import { OrderTypes } from '../types/order.types'

export interface FilterDto {
  limit?: number
  offset?: number
  order?: OrderTypes
  page?: number
  all?: TrueFalseTypes
}
