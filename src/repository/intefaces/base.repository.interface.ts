import { collectionsDb } from '../../commons/types/collections.types'

export interface IBaseRepository {
  all<T>(table: collectionsDb, filter?: T): Promise<Array<T>>
}
