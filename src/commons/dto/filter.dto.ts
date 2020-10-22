import { OrderTypes } from '../types/order.types'
import { TrueFalseTypes } from '../types/true-false.types'

export interface FilterDto {
  limit?: number | undefined
  offset?: number | undefined
  order?: OrderTypes
  page?: number | undefined
  all?: TrueFalseTypes
}
