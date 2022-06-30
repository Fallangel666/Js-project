//move player chart
const movePlayer = (x, y) => {
    const element = newImage('assets/green-character/static.gif')
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


//move npc chart
const moveNPCchart = (x, y) => {
    let element = newImage('assts/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

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