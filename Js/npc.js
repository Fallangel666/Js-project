const newNonPlayableCharacter = (x, y) => {
    let element = newImage('assts/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = `./assts/red-character/east.gif`
        await sleep(time);
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assts/red-character/north.gif`
        await sleep(time);
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assts/red-character/west.gif`
        await sleep(time);
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assts/red-character/south.gif`
        await sleep(time);
        stop()
    }

    function stop() {
        direction = null
        element.src = `./assts/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}