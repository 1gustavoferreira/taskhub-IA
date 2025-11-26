// backend/models/User.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password?: string
  provider: 'local' | 'google' | 'github'
  createdAt: Date
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // usado apenas para login local
    provider: { type: String, enum: ['local', 'google', 'github'], default: 'local' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
