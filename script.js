//1.hold a random number
//2.on button click the random number and user input needs to be compared
//cach the dom process

let randomNum = Math.floor(Math.random()*20)+1;
let startScore = 20;
let highScore = 0;

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const backgroundColor = document.querySelector('body');
const score = document.querySelector('.score');

function reset () {
    document.querySelector('.guess').value='';
}

function scoreUpdate (){
    if (startScore>0){
    startScore--;
    score.textContent=startScore;
    }
    else if (startScore<=0){
        message.textContent='Game over!' 
    }
}



console.log(document)

document.querySelector('.check').addEventListener('click', function(){
    let guess = +document.querySelector('.guess').value;
    //console.log(guess, typeof guess);
    if (guess===0){
       message.textContent='Enter a number'
    }
    else if (guess>randomNum){
       message.textContent='Too high!' 
       scoreUpdate();
       reset();
    }
    else if (guess<randomNum){
        message.textContent='Too low!'
        scoreUpdate();
        reset();
    }
    else if(guess===randomNum){
        message.textContent='You won the game!'
        backgroundColor.style.backgroundColor='#60b347';
        number.textContent=randomNum;
        number.style.width='30rem';
        if (highScore<startScore){
            highScore=startScore;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
})
//document.querySelector('.score').textContent=startScore;

document.querySelector('.again').addEventListener('click', function(){
    message.textContent='Start guessing...';
    number.textContent='?';
    number.style.width='15rem';
    backgroundColor.style.backgroundColor='#222';
    startScore = 20;
    score.textContent=startScore;
    randomNum = Math.floor(Math.random()*20)+1;
    reset();
})