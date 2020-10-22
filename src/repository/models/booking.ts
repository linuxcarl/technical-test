import mongoose from 'mongoose'

const { Schema } = mongoose

const bookingSchema = new Schema(
  {
    start_time: Date,
    end_time: Date,
    duration: String,
    psy: String,
    pattient: String,
    created_at: Date,
    updated_at: Date,
  },
  { typeKey: '$type' }
)
export const modelBooking = mongoose.model('booking', bookingSchema)
