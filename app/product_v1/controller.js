const { ObjectId } = require('bson')
const db = require('../../config/mongodb')

const index = async (req, res) => {
  try {
    const result = await db.collection('products').find().toArray()
    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const view = async (req, res) => {
  try {
    const { id } = req.params

    const result = await db
      .collection('products')
      .findOne({ _id: new ObjectId(id) })

    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const store = async (req, res) => {
  try {
    const { name, price, stock, status } = req.body

    await db.collection('products').insertOne({ name, price, stock, status })

    const result = await db.collection('products').findOne({ name })

    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const { name, price, stock, status } = req.body

    const { id } = req.params

    const products = db.collection('products')

    await products.findOneAndUpdate(
      { _id: new ObjectId(id) },

      {
        $set: {
          name: name && name,
          price: price && price,
          stock: stock && stock,
          status: status && status,
        },
        $currentDate: { lastModified: true },
      }
    )

    const result = await products.findOne({ _id: new ObjectId(id) })

    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params

    const result = await db
      .collection('products')
      .findOneAndDelete({ _id: new ObjectId(id) })

    res.json(result.value)
  } catch (error) {
    res.json({ message: error.message })
  }
}

module.exports = {
  index,
  view,
  store,
  update,
  destroy,
}
