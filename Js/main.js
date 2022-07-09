//puts player on screen
const pc = newPlayer(220, 420)

//put npc on screen
const npc = newNonPlayableCharacter(110, 110)

//player attack
playerAttack();

const moveNpc = async () =>{
    while(true){
await npc.walkSouth(1200);
await npc.walkEast(600);
await npc.walkSouth(600);
await npc.walkNorth(1200);
await npc.walkwest(600)
continue
}
}

if(playerPostion == npcPostion){
    npcAttack
}else{
    moveNpc
}

