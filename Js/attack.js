//make where i can add more npc or players
let statsProtyple={
   name: 'Unknown',
   health: 10,
   atk:0,
   def:0,
}
function Stats(){

}

Stats.protatype = statsProtyple
//player stats
playerStat= new Stats();
playerStat.name= 'player';
playerStat.atk= 5;
playerStat.def=4;
//npc stats
npcStat= new Stats();
npcStat.name= 'npc';
npcStat.atk= 4;
npcStat.def= 3

//player attack
const playerAttack = (player, npc) => {
    player = playerStat;
    npc = npcStat;
   let atkSum = playerStat.atk - npcStat.def;
   let lossingHealth = npcStat.health - atkSum;
   npcStat.health = lossingHealth
   if (npcStat.health < 1) {
      alert('You win')
   }
   document.addEventListener('keydown', (e) => {
      if (e.key == "a") {
console.log('attack')
      }
   })
}

//npc attack
const npcattack = (npc, player) => {
    player = playerStat;
    npc = npcStat;
   let atkSum = npcStat.atk - playerStat.def;
   let lossingHealth = playerStat.health - atkSum
   playerStat.health = lossingHealth
   if (playerStat.health < 1) {
      alert('You lose');
      remove(newPlayableCharacter)
   }
}





