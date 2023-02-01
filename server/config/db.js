import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

export const conn = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB Conectada')
  } catch (error) {
    console.log('Hubo un error al conectar la DB')
    console.log(error)
    process.exit(1)
  }
}
