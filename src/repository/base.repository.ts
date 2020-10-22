/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FilterDto } from '../commons/dto/filter.dto'
import db from '../commons/store/mocks.store'
import { collectionsDb } from '../commons/types/collections.types'
import { IBaseRepository } from './intefaces/base.repository.interface'

export class BaseRepository implements IBaseRepository {
  public async all<T>(collection: collectionsDb, filter?: FilterDto): Promise<T[]> {
    let result = await db[collection]

    if (filter) {
      const { order, all } = filter
      let { limit, page = 1 } = filter
      if (order) {
        result = order === 'asc' ? result.sort() : result.reverse()
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
