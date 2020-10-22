export interface IBooking {
  _id?: string
  start_time: Date
  end_time: Date
  duration: number
  psy: string
  pattient: string
  created_at?: Date
  updated_at?: Date | null
}
