//attack funchion for player and npc
let playerStat = {
   health: 100,
   Atk: 5,
   Def: 3,
}

let npcStat = {
   health: 100,
   Atk: 4,
   Def: 2,
}





//player attack
const playerAttack = (player, npc) => {
   player = playerStat;
   npc = npcStat;
   let atkSum = playerStat.Atk - npcStat.Def;
   lossingHealth = npcStat.health - atkSum;
   if (npcStat.health < 1) {
      alert('You win')
   }
   document.addEventListener('keydown', (e) => {
      if (e.key == "a") {
console.log('attack')
      }
   })
   return lossingHealth
}

//npc attack
const npcattack = (npc, player) => {
   player = playerStat;
   npc = npcStat;
   let atkSum = npcStat.Atk - playerStat.Def;
   lossingHealth = playerStat.health - atkSum
   if (playerStat.health < 1) {
      alert('You lose');
      remove(newPlayableCharacter)
   }
   return lossingHealth
}





