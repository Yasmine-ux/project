const express = require('express')
const cors = require('cors')
const app = express()
const routes = require("./routes/services_routes")
const reservationRouter = require('./routes/reservationRoutes')
const services = require("./routes/services_routes")
const clients = require("./routes/clients_routes")
const serviceProvider = require("./routes/serviceProvider_routes")
const categories = require("./routes/categories_routes")

const connectDB = require('./config/connectDB')

app.use(express.json())
app.use(cors())

connectDB()

app.use("/services", routes)
app.use('/reservation', reservationRouter);
app.use("/services", services)
app.use("/clients", clients)
app.use("/serviceProviders", serviceProvider)
app.use("/categories", categories)

const port = process.env.PORT||5000
app.listen(port, err => err?console.log(err) : console.log(`connected on port ${port}`))

