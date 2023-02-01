import express from 'express'
import { conn } from './config/db.js'
import userRouter from './routes/users.js'

const app = express()

conn()

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.use('/api/users', userRouter)

app.listen(PORT, '0.0.0.0', () => {
  console.log('server up, port : ', PORT)
})
