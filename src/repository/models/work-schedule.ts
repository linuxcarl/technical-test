import mongoose from 'mongoose'

const { Schema } = mongoose

const workScheduleSchema = new Schema(
  {
    _id: String,
    psy: String,
    days: [
      {
        date: Date,
        dayOfWeek: String,
        workingPlan: {
          start: Date,
          end: Date,
        },
        restPlan: {
          start: Date,
          end: Date,
        },
      },
    ],
    created_at: Date,
    updated_at: Date,
  },
  { typeKey: '$type' }
)
export const modelWorkSchedule = mongoose.model('workSchedule', workScheduleSchema)
