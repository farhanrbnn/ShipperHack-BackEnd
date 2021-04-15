const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

dotenv.config()
app.use(bodyParser.json())

let corsOption = {
	origin: 'http://localhost:8080'
}

app.use(cors(corsOption))
// import routes
const inboundRoutes = require('./routes/inboundRoutes')

mongoose.connect(process.env.DB_CONNECT,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
.then(() => {
	console.log('dbconnected')
})
.catch((err) => {
	console.log(err)
})

app.get('/api/v1', (req, res) => {
	return res.status(200).send("OK")
})
app.use('/api/v1', inboundRoutes)

app.listen(5000, () => {
	console.log('server listening')
})