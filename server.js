require('dotenv').config() // loads environment variables from our .env

const express = require('express') // pulls in express library
const app = express() // creates an app variable that we'll use to configure our server
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error)) // allows us to if there was an error connecting to the db
db.once('open', () => console.log('Connected to Database'))

app.use(express.json()) // code that runs when the server gets a request but before it gets passed to our routes

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))