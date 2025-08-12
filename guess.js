let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessNum = 0;
let output = document.getElementById('history');
let message = document.querySelector('span');
let body = document.querySelector('body');
let button = document.createElement('button');

document.getElementById("form").addEventListener('submit', e =>{
    e.preventDefault();
    checkNum();
});



function checkNum(){
    message.classList.remove('tooBig','tooSmall','tooMany','justRight')
    let userGuess = Number(field.value);
    if(guessNum === 0){
       output.innerText = 'Previous guesses: ';
    }
    if(userGuess === randomNumber){
        message.innerText = 'Congratulations! You got it right!';
        message.classList.add('justRight');
        gameOver();
    }else if(guessNum === 9){
        message.innerText = '!!! Too Many Attempts, GAME OVER !!!';
        message.classList.add('tooMany');
        gameOver();
    }else if(userGuess < randomNumber){
        message.innerText = 'WRONG, that guess was too small';

        message.classList.add('tooSmall');
    }else if( userGuess > randomNumber){
        message.innerText = 'WRONG, that guess was too BIG';
        message.classList.add('tooBig');
    }
    output.innerText += ` ${userGuess}`;
    field.value = '';
    guessNum++;
}
function gameOver(){
    field.disabled = true;
    button.textContent = 'Start New Game';
    button.addEventListener('click', reset);
    body.appendChild(button);
    button.focus();
}
function reset(){
    button.parentNode.removeChild(button);
    guessNum = 0;
    userGuess = 0;
    message.classList.remove('tooMany','justRight')
    output.innerText = '';
    message.innerText = '';
    field.disabled = false;
    field.focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}