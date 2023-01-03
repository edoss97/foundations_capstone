const express = require('express')
const cors = require('cors')
const {getDestinations, addWish, deleteDest, updateDest} = require('./controller')
const app = express()

const path = require('path')


app.use(express.json())
app.use(cors())
app.use(express.static(__dirname+'../public'))



app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html' ))
})

app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css' ))
})
app.get('/js', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js' ))
})


app.get('/api/destinations', getDestinations)
app.get('/api/wishlist', getDestinations)
app.post('/api/wishlist', addWish)
app.delete('/api/destinations/:id',deleteDest)
app.delete('/api/wishlist/:id',deleteDest)
app.put('/api/destinations/:id', updateDest)
app.put('/api/wishlist/:id', updateDest)




app.listen(4050,console.log('Server is running on 4050'))
