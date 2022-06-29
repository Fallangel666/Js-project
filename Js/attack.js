//attack funchion for player and npc
const playerAtk = {
      health: 100,
      Atk: 5,
      Def: 3,
   }
   
const npcAtk = {
   health: 100,
   Atk: 4,
   Def: 2,
}
//player attack
const playerAttack = (player, target,) =>{
let atkSum = player.Atk - npcAtk.Def,
lossingHealth= npcAtk.health - atkSum
if (npcAtk.health < 1){
   alert('You win')
}
 }

 //npc attack
 const npcattack = (npc, target) => {
   let atkSum = npcAtk.Atk - playerAtk.Def,
   lossingHealth= playerAtk.health - atkSum
   if (playerAtk.health < 1){
      alert('You lose')
   }
 } 
   
   



