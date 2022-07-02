const topWall = { tertureUrl: 'assts/Wall.png', canUserStandHere: false };
const bottomWal = { tertureUrl: 'assts/Wall.png', canUserStandHere: false };
const sideWall = { tertureUrl: 'assts/Wall.png', canUserStandHere: false };
const floor = { tertureUrl: 'assts/floor.jpg', canUserStandHere: true };

const map =
    [
        [topWall, topWall, topWall, topWall, topWall],
        [sideWall, floor, floor, floor, floor, sideWall],
        [sideWall, floor, floor, floor, floor, sideWall],
        [sideWall, floor, floor, floor, floor, sideWall],
        [bottomWal, bottomWal, bottomWal, bottomWal, bottomWal],
    ];



const drawMap = (url, x, y, width, height ) => {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.top = `${y}px`
    image.style.left = `${x}px`
    image.style.width = `${width}px`
    image.style.height = `${height}px`
    document.body.append(image)
    return image
};
// code from mdm web pages link https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
const getTile = (column, row) => {
    return this.titles[row * map.columns + column]
};

// arr[column][row]
for (let column = 0; column < map.length; column++) {
    const rowYourOnNow = map[column]
    for (let row = 0; row < rowYourOnNow.length; row++) {
        let tile = rowYourOnNow[row]
        drawMap(
            tile.tertureUrl,
            (100 * column), // location x = tile width multiplied by current column 
            (100 * row), // location y = tile height multiplied by current row
            100, // tile width
            100, // tile height
            // c * map.tsize,
            // r * tsize,
            // map.tsize,
            // map.tsize,
        );

    }
}
