import express from 'express'
import { conn } from './config/db.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'

const app = express()

conn()

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, '0.0.0.0', () => {
  console.log('server up, port : ', PORT)
})
