import mongoose from 'mongoose'

const { Schema } = mongoose

const pattientSchema = new Schema(
  {
    _id: String,
    name: Date,
    created_at: Date,
    updated_at: Date,
  },
  { typeKey: '$type' }
)
export const modelPattient = mongoose.model('pattient', pattientSchema)
