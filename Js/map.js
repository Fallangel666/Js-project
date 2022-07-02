const topWall = { tertureUrl: 'assts/Wall.png', canUserStandHere: false }
const bottomWal = { tertureUrl: 'assts/bottom-wall.jpg', canUserStandHere: false }
const sideWall = { tertureUrl: 'assts/Sidewall.jpg', canUserStandHere: false }
const floor = { tertureUrl: 'assts/floor.jpg', canUserStandHere: true }

const map =
    [
        [topWall, topWall, topWall, topWall, topWall],
        [sideWall, floor, floor, floor, floor, sideWall],
        [sideWall, floor, floor, floor, floor, sideWall],
        [sideWall, floor, floor, floor, floor, sideWall],
        [bottomWal, bottomWal, bottomWal, bottomWal, bottomWal],
    ]



const drawMap = url => {
    let image = document.createElement('img')
    image.src = url
    return image
}
// code from mdm web pages link https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
const getTile = (column, row) => {
    return this.titles[row * map.columns + column]
}

// arr[column][row]
for (let column = 0; column < map.length; column++) {
    const rowYourOnNow = map[column]
    for (let row = 0; row < rowYourOnNow.length; row++) {
        let tile = map[row][column];
        drawMap(
            tile.tertureUrl,
            (30 * rowYourOnNow), // location x = tile width multiplied by current column 
            (30 * row), // location y = tile height multiplied by current row
            map.tsize, // tile width
            map.tsize, // tile height
            // c * map.tsize,
            // r * tsize,
            // map.tsize,
            // map.tsize,
        );

    }
}
