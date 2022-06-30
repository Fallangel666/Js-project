
//put an image on the site
const newImage = url => {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

//add items to the site
const newItem = url =>{
    let item = newImage(url)
    item.addEventListener('click', ()=>{
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventoryItem.append(inventoryItem)

    })
    return item
}

//add an inventory to the site 
const inventoryMag = () => {
    let inventory = document.body.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100%'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.justifyContect = 'spce-evenly'
    inventory.style.border = '4px solid black'
    inventory.style.backgroundColor = 'white'
   document.body.append(inventory)
   return inventory
}


