const mongoose = require('mongoose')

require('dotenv').config()

const connection = process.env.MONGO_URI

mongoose.set('strictQuery', false)

mongoose.connect(connection, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => console.error('Connection error:'))

db.once('open', () => {
  console.log('Connected successfully to server [mongoose]')
})
