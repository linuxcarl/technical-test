import mongoose from 'mongoose'

const { Schema } = mongoose

const psychologistSchema = new Schema(
  {
    _id: String,
    name: Date,
    created_at: Date,
    updated_at: Date,
  },
  { typeKey: '$type' }
)
export const modelPsychologist = mongoose.model('psychologist', psychologistSchema)
