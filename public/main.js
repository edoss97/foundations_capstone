const destinationHolder = document.querySelector('#destination-holder')
const wishHolder = document.querySelector('#wish-holder')
const form = document.querySelector('form')
const deleteBtn = document.querySelector('#delete')
const changeBtn = document.querySelector('#visited')


const destCallback = ({ data: destination }) => displayDest(destination)
const wishCallback = ({ data: destination }) => displayWish(destination)
const errCallback = err => console.log(err)

const getDest = () => axios.get('http://localhost:4050/api/destinations').then(destCallback).catch(errCallback)
const getWish = () => axios.get('http://localhost:4050/api/wishlist').then(wishCallback).catch(errCallback)
const addWish = body => axios.post('http://localhost:4050/api/wishlist',body).then(wishCallback).catch(errCallback)
const deleteDest = id => axios.delete(`http://localhost:4050/api/destinations/${id}`).then(destCallback).catch(errCallback)
const deleteWish = id => axios.delete(`http://localhost:4050/api/wishlist/${id}`).then(wishCallback).catch(errCallback)
const updateDest = id => axios.put(`http://localhost:4050/api/destinations/${id}`).then(getFunc()).catch(errCallback)
const updateWish = id => axios.put(`http://localhost:4050/api/wishlist/${id}`).then(getFunc()).catch(errCallback)

function createDest(destination) {
    const destBlock = document.createElement('div')
    
    destBlock.classList.add('dest-block')

    destBlock.innerHTML = `<img alt='destination image' src=${destination.imageURL} class="dest-cover-image"/>
    <p class="destinationLocation">${destination.destination}</p>
    <button onclick="updateDest(${destination.id})"> Switch Visited Status</button> <button onclick="deleteDest(${destination.id})"> Delete <delete>`


    destinationHolder.appendChild(destBlock)
}
function createWish(destination) {
    const destBlock = document.createElement('div')
    
    destBlock.classList.add('dest-block')

    destBlock.innerHTML = `<img alt='destination image' src=${destination.imageURL} class="dest-cover-image"/>
    <p class="destinationLocation">${destination.destination}</p>
    <button onclick="updateWish(${destination.id})"> Switch Visited Status</button> <button onclick="deleteWish(${destination.id})"> Delete <delete>`


    wishHolder.appendChild(destBlock)
}
const submitHandler = e => {
    e.preventDefault()
    let destination = document.querySelector('#destination')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        destination: destination.value,
        imageURL: imageURL.value
    }
    addWish(bodyObj)
    destination.value = ''
    imageURL.value = ''
   
}
function displayWish(arr) {
    wishHolder.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].visited === false) {createWish(arr[i])}
    }
}
function displayDest(arr) {
    destinationHolder.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].visited === true) {createDest(arr[i])}
    }
}




form.addEventListener('submit', submitHandler)


const getFunc = () =>{getWish() && getDest()}
getFunc()