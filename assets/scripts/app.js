const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE= 14;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;
const enteredNumber = prompt('You should enter number maximum 100' , '100'); 

let maxLifeValue = parseInt(enteredNumber);

if(isNaN(maxLifeValue) || maxLifeValue <= 0){
    maxLifeValue = 100;
}

let currentMonsterLife = maxLifeValue;
let currentUserLife =  maxLifeValue;
let hasBonusLife = true;

adjustHealthBars(maxLifeValue);

function reset(){
    currentMonsterLife = maxLifeValue;
    currentUserLife =  maxLifeValue;
    resetGame(maxLifeValue);    
}

function endRound(){
    let initialPlayerHealth = currentUserLife;
    let userDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentUserLife -= userDamage;

    if(currentUserLife <= 0 && hasBonusLife ){
        hasBonusLife = false;
        removeBonusLife();
        currentUserLife = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("Bonus Life Saved You");
    }

    if(currentMonsterLife <= 0 && currentUserLife > 0){
        alert('You Win!');
        reset();
    }else if(currentUserLife <= 0 && currentMonsterLife > 0){
        alert('You Lose!');
        reset();
    }else if(currentMonsterLife <=0 && currentUserLife <=0 ){
        alert('You have a Draw');
        reset();
    }
} 

function attackType(type){
    let maxDamage;
    if(type === "ATTACK"){
        maxDamage = ATTACK_VALUE;
    }else if(type === "STRONG_ATTACK"){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterLife -= damage;
    endRound();
} 



function attackHandler(){
    attackType('ATTACK');
    
}

function strongAttackHandler(){
    attackType('STRONG_ATTACK');
    
}

function healPlayerHandler(){
    let healValue;
    if(currentUserLife >= maxLifeValue - HEAL_VALUE ){
        alert("You can't heal yourself ,you reach the maximum number");
        healValue = maxLifeValue - currentUserLife;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentUserLife += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click' , attackHandler );
strongAttackBtn.addEventListener('click' , strongAttackHandler );
healBtn.addEventListener('click' , healPlayerHandler);