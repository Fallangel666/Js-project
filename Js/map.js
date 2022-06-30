const topWall = {tertureUrl: 'assts/Wall.png', canUserStandHere: false}
const bottomWal = {tertureUrl:'assts/bottom-wall.jpg',   canUserStandHere: false}
const sideWall = {tertureUrl:'assts/Sidewall.jpg', canUserStandHere: false}
const floor = {tertureUrl: 'assts/floor.jpg', canUserStandHere: true}

const map =
[
    [topWall,topWall,topWall,topWall,topWall],
    [sideWall,floor,floor,floor,floor,sideWall],
    [sideWall,floor,floor,floor,floor,sideWall],
    [sideWall,floor,floor,floor,floor,sideWall],
    [bottomWal,bottomWal,bottomWal,bottomWal,bottomWal],
]



const drawMap = url =>{
    let image = document.createElement('img')
    image.src = url
    return image
}
// code from mdm web pages link https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
const getTile = (col, row) => {
    return this.titles[row * map.cols + col]
}


for (let column = 0; column < map.length; column++ ){
    const rowYourOnNow = map[column]
    for (let row = 0; row < rowYourOnNow.length; row++){
        let tile = map.getTile(column, row);
        if(tile === 0){
            context.drawImage(
                tileAtlas,
                (tile - 1)*map.tsize,
                0,
                map.tsize,
                map.tsize,
                c * map.tsize,
                r * tsize,
                map.tsize,
                map.tsize,
            )

        }
    }

}
