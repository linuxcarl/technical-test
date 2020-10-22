import { collectionsDb } from '../../commons/types/collections.types'

export interface IBaseRepository {
  all<T>(collection: collectionsDb, filter?: T): Promise<Array<T>>
}
