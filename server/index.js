import express from 'express'
import { conn } from './config/db.js'

const app = express()

conn()

console.log('Starting...')

const PORT = process.env.PORT || 4000

app.listen(PORT, '0.0.0.0', () => {
  console.log('server up, port : ', PORT)
})
