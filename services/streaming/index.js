const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

const app = express()
const PORT = 1111;

app.use(cors())
app.use(express.json())

const MONGODB_URI = 'mongodb+srv: //odim:TjckOtWHyxXERa8i@cluster0.fecgf.mongodb.net/Streaga?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected !!')
})

const streamRouter = require("./routes/stream")
app.use('/streams', streamRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})



