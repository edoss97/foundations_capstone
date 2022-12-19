const express = require('express')
const cors = require('cors')
const {getDestinations} = require('./controller')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/destinations', getDestinations)



app.listen(4050,console.log('Server is running on 4050'))
