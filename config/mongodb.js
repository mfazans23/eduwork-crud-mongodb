const { MongoClient } = require('mongodb')

require('dotenv').config()

// Connection URI
const uri =
  'mongodb+srv://mfazans23:mfazans23@cluster0.vex5oxc.mongodb.net/eduwork-native?retryWrites=true&w=majority'

// Create a new MongoClient
const client = new MongoClient(uri)

;(async () => {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect()

    console.log('Connected successfully to server [mongodb]')
  } finally {
    // await client.close()
  }
})()

const db = client.db('eduwork-native')

module.exports = db
