const Product = require('./model.js')

const index = async (req, res) => {
  try {
    const result = await Product.find()

    res.json(result)
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

const view = async (req, res) => {
  try {
    const { id } = req.params

    const result = await Product.findById(id)
    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const store = async (req, res) => {
  try {
    const { name, price, stock, status } = req.body

    const result = await Product.create({
      name,
      price,
      stock,
      status,
    })

    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const { name, price, stock, status } = req.body

    const { id } = req.params

    const result = await Product.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: name && name,
          price: price && price,
          stock: stock && stock,
          status: status && status,
        },
      },
      { new: true }
    )
    res.json(result)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params

    const result = await Product.findOneAndDelete({ _id: id })

    res.json(result)
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
