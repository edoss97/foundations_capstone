const database = require('./db.json')

module.exports = {
getDestinations:(req,res) =>{
    res.status(200).send(database)
}

}