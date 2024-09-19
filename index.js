import 'dotenv/config'
import { app } from './server.js'
import mongoose from 'mongoose'

const port = process.env.PORT
const host = process.env.MONGODB_URI

try {
  await mongoose.connect(`${host}/whispering-database`)
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Running in http://192.168.1.75:${port}`)
  })
} catch (error) {
  console.error(error)
}
