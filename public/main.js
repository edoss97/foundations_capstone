const destinationHolder = document.querySelector('#destination-holder')




const destCallback = ({ data: destination }) => displayDest(destination)
const errCallback = err => console.log(err)

const getDest = () => axios.get('http://localhost:4050/api/destination').then(destCallback).catch(console.log(errCallback))


function createDest(destination) {
    const destBlock = document.createElement('div')
    destBlock.classList.add('dest-block')

    destBlock.innerHTML = `<img alt='destination image' src=${destination.imageURL} class="dest-cover-image"/>
    <p class="destinationLocation">${destination.destination}</p>`


    destinationHolder.appendChild(destBlock)
}




function displayHouses(arr) {
    destinationHolder.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createDest(arr[i])
    }
}


getDest()