const mongoose = require('mongoose')

require('dotenv').config()

const connection =
  'mongodb+srv://mfazans23:mfazans23@cluster0.vex5oxc.mongodb.net/eduwork-native?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

mongoose.connect(connection, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => console.error('Connection error:'))

db.once('open', () => {
  console.log('Connected successfully to server [mongoose]')
})
