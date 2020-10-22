/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { FilterDto } from '../commons/dto/filter.dto'
import { ConnectDb } from '../commons/store/mongodb.store'
import { collectionsDb } from '../commons/types/collections.types'
import { OrderTypes } from '../commons/types/order.types'
import { IBaseRepository } from './intefaces/base.repository.interface'

export class BaseRepository implements IBaseRepository {
  private db: any

  public constructor() {
    ConnectDb.connect().then((res) => (this.db = res))
  }

  async all<T>(collection: collectionsDb, filter?: FilterDto): Promise<T[]> {
    const result = this.db.model(collection).find().select({ _id: 0, updated_at: 0, __v: 0 })

    if (filter) {
      const { limit, page = 1, all, order } = filter

      const queryFilter = this.cleanFilter(filter)
      if (queryFilter) {
        result.find(queryFilter)
      }
      if (limit && !all) {
        result.limit(limit * 1).skip((page - 1) * limit)
      }
      if (order) {
        result.sort({ created_at: OrderTypes[order] })
      }
    }
    return (result as unknown) as T[]
  }

  public async create<T>(data: T): Promise<T> {
    return data
  }

  protected cleanFilter(filter: any): any {
    if (filter) {
      delete filter.limit
      delete filter.offset
      delete filter.order
      delete filter.page
    }
    const filters: any = {}
    Object.entries(filter).forEach(([index, value]) => {
      if (value) {
        filters[index] = value
      }
    })
    return filters
  }
}
