const database = require('./db.json')
let newID = 7
module.exports = {
getDestinations:(req,res) =>{
    res.status(200).send(database)
},
addWish:(req,res) => {
    let {destination, imageURL} = req.body
    console.log(req.body)
    let newDest = {
        id: newID,
        destination: destination,
        imageURL:imageURL,
        visited: false
    }
    database.push(newDest)
    res.status(200).send(database)
    newID++
},
deleteDest:(req,res) => {
    let { id } = req.params
    console.log(req.params)
    let index = database.findIndex(destObj => destObj.id === +id)
    database.splice(index,1)
    res.status(200).send(database)
},
updateDest: (req,res) => {
    let {id} = req.params
    let index = database.findIndex(destObj => destObj.id === +id)
    let destToUpdate = database[index]
    if (destToUpdate.visited === true) {destToUpdate.visited = false}
    else if(destToUpdate.visited === false) {destToUpdate.visited = true}
    res.status(200).send(database)
}
}