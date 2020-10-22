import mongoose from 'mongoose'

const { Schema } = mongoose

const bookingSchema = new Schema(
  {
    _id: String,
    start_time: Date,
    end_time: Date,
    duration: String,
    psy: String,
    pattient: String,
    createdAt: Date,
    updatedAt: Date,
  },
  { typeKey: '$type' }
)
export const modelBooking = mongoose.model('booking', bookingSchema)
