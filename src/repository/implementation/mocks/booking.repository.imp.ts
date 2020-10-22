import { FilterDto } from '../../../commons/dto/filter.dto'
import db from '../../../commons/store/mocks.store'
import { collectionsDb } from '../../../commons/types/collections.types'
import { OrderTypes } from '../../../commons/types/order.types'
import { BaseRepository } from '../../base.repository'

export class BookingMocksRepository extends BaseRepository {
  constructor() {
    super()
  }

  public async all<T>(collection: collectionsDb, filter?: FilterDto): Promise<T[]> {
    let result = await db[collection]

    if (filter) {
      const { order, all } = filter
      let { limit, page = 1 } = filter
      if (order) {
        result = order === OrderTypes.asc ? result.sort() : result.reverse()
      }
      if (limit && !all) {
        page -= 1
        const init = limit * page
        limit = init ? Number(init) + Number(limit) : limit
        result = result.length >= Number(limit) ? result.slice(init, limit) : result
      }
    }

    return (result as unknown) as T[]
  }
}
