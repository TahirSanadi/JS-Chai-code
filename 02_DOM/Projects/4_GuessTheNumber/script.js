let randomNum = parseInt(Math.random() *100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaning= document.querySelector('.lastResult')
const loOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

const p =document.createElement('p');
let prevGuess=[]
let numGuesses=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please add valid number...!")
    }else if(guess<1){
        alert("please add valid number more than 1...!")

    }else if(guess>100){
        alert("please add valid number less than 100...!")
    }else{
        prevGuess.push(guess)
        if(numGuesses===11){
            displayGuess(guess)
            displayMsg(`Game Over,Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randomNum){
        displayMsg(`Your guessed it right`)
    }else if(guess<randomNum){
        displayMsg(`Number is too low`)
    }else if(guess>randomNum){
        displayMsg(`Number is too high`)
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    numGuesses++;
    remaning.innerHTML=`${11-numGuesses}`
}
function displayMsg(message){
    loOrHi.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
    const neewGamebutton = document.querySelector('#newGame')
    neewGamebutton.addEventListener('click',function(e){
        randomNum=parseInt(Math.random() *100+1)
        prevGuess=[]
        numGuesses=1
        guessSlot.innerHTML=''
        remaning.innerHTML=`${10-numGuesses}`
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        playGame=true
    })
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame();
}
