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
npcStat.name= 'enemy';
npcStat.atk= 4;
npcStat.def= 3

//player attack
const playerAttack = () => {
   let atkSum = player.atk - enemy.def;
   let lossingHealth = enemy.health - atkSum;
   enemy.health = lossingHealth
   if (enemy.health < 1) {
      alert('You win')
   }
   document.addEventListener('keydown', (e) => {
      if (e.key == "a") {
            
      }
   })
}

//npc attack
const npcAttack = () => {
   let atkSum = enemy.atk - player.def;
   let lossingHealth = player.health - atkSum
   player.health = lossingHealth
   if (player.health < 1) {
      alert('You lose');
      remove(newPlayableCharacter)
   }
}





