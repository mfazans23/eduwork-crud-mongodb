const express = require('express')
const logger = require('morgan')
const path = require('path')
const productRouterV1 = require('./app/product_v1/routes')
const productRouterV2 = require('./app/product_v2/routes')

require('./config/mongoose')

const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.sendFile(path.join(__dirname, '/index.html'))
})
app.use('/api/v1/product', productRouterV1)
app.use('/api/v2/product', productRouterV2)

app.use((req, res) => {
  res.status(404).send({
    status: 'failed',
    message: `Resource ${req.originalUrl} not found`,
  })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

module.exports = app
