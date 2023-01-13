let hasblackjack = false;
let isAlive = false;
let message = ""
const cards = []
let sum = 0;
// let playerName = 'Sandeep';
// let playerMoney = 1000;
// to put above that variable in one variable we need an object
let player = {name:'Sandeep', chips:1000}

const cardsEl = document.getElementById('cards-el')
const newCardEl = document.getElementById('new-card')
const sumEl = document.getElementById('sum-el')
const messageEl = document.getElementById('message-el')
const errorEl = document.getElementById('error')
const playerEl = document.getElementById('player-el')


playerEl.textContent = player.name + ": $" + player.chips

function startGAME(){
    isAlive= true;
    let firstcard = getRandomCard1();
    let secondcard = getRandomCard2();
    cards.push(firstcard)
    cards.push(secondcard)
    sum = firstcard+secondcard;
    // for(let i=0; i<cards.length; i++){
    //     cardsEl.textContent += cards[i]+ ',';
    // }
    cardsEl.textContent = 'cards: '+firstcard+' and '+secondcard;
    sumEl.textContent = sum;
    if(sum<21){
        messageEl.innerText = '⚡ Do you want to draw a new card?😀'
        isAlive = true;
    } else if(sum===21){
        messageEl.innerText = '⚡ wohoo! you have got a blackjack!🥳🎉'
        hasblackjack = true
    }else{
        messageEl.innerText = '⚡ You are run out of the game!😖'
        isAlive = false
    }

    newCardEl.textContent = 'New card: '+0;
    errorEl.textContent = ''
}

function newCard(){
    if(isAlive===true && hasblackjack===false){
        messageEl.textContent = '⚡ Drawing a new Card!'
        let card = getRandomCard3();
        cards.push(card)
        sum += card;
        sumEl.textContent = sum;
        // for(i=0; i<cards.length; i++){
        //     console.log(cards[i])
        //     cardsEl.textContent += ' '+cards[i]+ ',';
        // }
        newCardEl.textContent = 'New card: '+card;
        if(sum<21){
            messageEl.innerText = '⚡ Do you want to draw a new card?😀'
        } else if(sum===21){
            messageEl.innerText = '⚡ wohoo! you have got a blackjack!🥳🎉'
            hasblackjack = true
        }else{
            messageEl.innerText = '⚡ You are run out of the game!😖'
            isAlive = false
        }
    }else{
        errorEl.textContent = "Error: Play a new game"
    }

}

function getRandomCard1(){
    let number = Math.floor(Math.random()*13)+1;
    if(number===1){
        return number = 11;
    }else if(number>10){
        return number = 10;
    }else{
        return number;
    }
    console.log(number);
}
function getRandomCard2(){
    let number = Math.floor(Math.random()*13)+1;
    if(number===1){
        return number = 11;
    }else if(number>10){
        return number = 10;
    }else{
        return number;
    }
    console.log(number);
}
function getRandomCard3(){
    let number = Math.floor(Math.random()*13)+1;
    if(number===1){
        return number = 11;
    }else if(number>10){
        return number = 10;
    }else{
        return number;
    }
    console.log(number);
}


// function restart(){
//     cardsEl.remove()
//     sumEl.remove();
// }

// ctrl + d = to select more than 1 words



