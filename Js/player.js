//makes player and put them on screen
const newPlayer = (x, y) => {
    const element = newImage('assts/green-character/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assts/green-character/static.gif`
        }
        if (direction === 'west') {
            element.src = `assts/green-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assts/green-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assts/green-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assts/green-character/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}