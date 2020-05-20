const express = require('express')
const cors = require('cors')
const app = express()
const services = require("./routes/services_routes")
const clients = require("./routes/clients_routes")
const serviceProvider = require("./routes/serviceProvider_routes")
const categories = require("./routes/categories_routes")

const connectDB = require('./config/connectDB')

app.use(express.json())
app.use(cors())

connectDB()

app.use("/", services)
app.use("/", clients)
app.use("/", serviceProvider)
app.use("/", categories)

const port = process.env.PORT||5000
app.listen(port, err => err?console.log(err) : console.log(`connected on port ${port}`))