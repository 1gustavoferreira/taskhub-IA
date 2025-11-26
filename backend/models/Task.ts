// backend/models/Task.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface ITask extends Document {
  title: string
  description?: string
  status: 'todo' | 'in-progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  tags: string[]
  userId: mongoose.Types.ObjectId
  createdAt: Date
}

const TaskSchema: Schema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    tags: [{ type: String }],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export default mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema)
