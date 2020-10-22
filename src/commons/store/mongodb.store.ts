/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import db from 'mongoose'
import { Config } from '../../config/index'

const { dbUser, dbPassword, dbName, dbHost } = Config.db()
db.Promise = global.Promise

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)
const DB_NAME = dbName
const DB_HOST = dbHost

export class ConnectDb {
  private static instance: ConnectDb

  private static mongoUrl = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

  private constructor() {
    return ConnectDb.instance || new ConnectDb()
  }

  public static async connect(): Promise<any> {
    try {
      await db.connect(this.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('[db] Conectada con el server db')
      return db
    } catch (error) {
      console.log(error)
    }
  }
}
