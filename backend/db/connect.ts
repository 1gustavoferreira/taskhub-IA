// backend/db/connect.ts
import mongoose from 'mongoose'

export async function connectDB(uri: string) {
  if (mongoose.connection.readyState >= 1) return

  try {
    await mongoose.connect(uri)
    console.log('✅ Conectado ao MongoDB')
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error)
    process.exit(1)
  }
}
