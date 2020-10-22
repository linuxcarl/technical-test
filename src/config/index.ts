import dotenv from 'dotenv'
import { IApi } from './interfaces/api.interface'
import { IDb } from './interfaces/db.interface'

dotenv.config()

export class Config {
  private static instance: Config

  private constructor() {
    return Config.instance || new Config()
  }

  public static api(): IApi {
    return {
      port: Number(process.env.PORT) || 3000,
      cors: process.env.CORS || '*',
    }
  }

  public static db(): IDb {
    return {
      dbUser: process.env.DB_USER || '',
      dbPassword: process.env.DB_PASSWORD || '',
      dbName: process.env.DB_NAME || '',
      dbHost: process.env.DB_HOST || '',
    }
  }
}
