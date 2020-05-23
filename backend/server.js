const express = require('express')
const cors = require('cors')
const app = express()
const routes = require("./routes/services_routes")
const reservationRouter = require('./routes/reservationRoutes')

const connectDB = require('./config/connectDB')

app.use(express.json())
app.use(cors())

connectDB()

app.use("/services", routes)
app.use('/reservation', reservationRouter);

const port = process.env.PORT||5000
app.listen(port, err => err?console.log(err) : console.log(`connected on port ${port}`))