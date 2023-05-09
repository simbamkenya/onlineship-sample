const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')




require('dotenv/config');

const api = process.env.API_URL

const app = express()
const port = 3000 || process.env.PORT

const cors = require('')

const productsRouter = require('./routes/products')
const categoriesRouter = require('./routes/categories')
const ordersRouter = require('./routes/orders')
const orderItemsRouter = require('./routes/orderItems')
const usersRouter = require('./routes/users')

app.use(cors())
app.use('*', cors())

//middlewares
app.use(express.json())
app.use(morgan('tiny'))


app.use(`${api}/products`, productsRouter)
app.use(`${api}/orders`, ordersRouter)
app.use(`${api}/orderItems`, orderItemsRouter)
app.use(`${api}/users`, usersRouter)



//db connection 
mongoose.connect('mongodb://127.0.0.1:27017/simba')
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })


app.listen(port, () => {
    console.log(`port listening on port ${port}`)
})