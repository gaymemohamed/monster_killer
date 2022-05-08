const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE= 14;
const STRONG_ATTACK_VALUE = 20;

let maxLifeValue = 100;
let currentMonsterLife = maxLifeValue;
let currentUserLife =  maxLifeValue;

adjustHealthBars(maxLifeValue);

function attackType(type){
    let maxDamage;
    if(type === "ATTACK"){
        maxDamage = ATTACK_VALUE;
    }else if(type === "STRONG_ATTACK"){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterLife -= damage;
    let userDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentUserLife -= userDamage;
    if(currentMonsterLife <= 0 && currentUserLife > 0){
        alert('You Win!');
    }else if(currentUserLife <= 0 && currentMonsterLife > 0){
        alert('You Lose!');
    }else if(currentMonsterLife <=0 && currentUserLife <=0 ){
        alert('You have a Draw');
    }
} 



function attackHandler(){
    attackType('ATTACK');
    
}

function strongAttackHandler(){
    attackType('STRONG_ATTACK');
    
}

attackBtn.addEventListener('click' , attackHandler );
strongAttackBtn.addEventListener('click' , strongAttackHandler );