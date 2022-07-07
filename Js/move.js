let playerX ;
let playerY ;
let playerPostion= {playerX, playerY}

function move(element, x, y) {
    element.style.position = 'fixed'
    playerX = x
    playerY= y

    function moveToCoordinates(left, top) {
        element.style.left = left + 'px'
        element.style.top = top + 'px'
    }

    function moveWithArrowKeys(left, top, callback){
        let direction = null;
         playerX = left;
         playerY = top;

        element.style.left = x + 'px'
        element.style.top = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                playerX-=1
            }
            if(direction === 'north'){
                playerY-=1
            }
            if(direction === 'east'){
                playerX+=1
            }
            if(direction === 'south'){
                playerY+=1
            }
            element.style.left = playerX + 'px'
            element.style.top = playerY + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}