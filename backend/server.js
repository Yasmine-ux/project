const express = require('express')
const cors = require('cors')
const app = express()
const routes = require("./services/routes/service")

const connectDB = require('./services/config/connectDB')

app.use(express.json())
app.use(cors())

connectDB()

app.use("/services", routes)

const port = process.env.PORT||5000
app.listen(port, err => err?console.log(err) : console.log(`connected on port ${port}`))