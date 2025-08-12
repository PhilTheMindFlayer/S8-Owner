const image = document.getElementById('CoinImage');
const choices = ['heads', 'tails'];
const images = ['CoinTossImages/heads.jpg', 'CoinTossImages/tails.jpg'];
const counts = [0, 0];
const choice = document.getElementById('choice');
const face = document.getElementById('face');
const outcome = document.getElementById('outcome');
const score = document.getElementById('score');



document.getElementById('flip').addEventListener('click', function(flip) {
    let choice = '';
    
    if (flip.target.tagName === 'BUTTON') {
    choice = flip.target.getAttribute('data-choice');
    console.log(`${choice}`);
    }

    const toss = Math.floor(Math.random() * 2);
    const result = choices[toss];
    image.src = images[toss]

    if (choice === result) {
        counts[0]++; // win the toss
        pick.textContent = `You chose ${choice}.`;
        face.textContent = `The toss is ${result}`;
        outcome.textContent = `You chose Wisely!`;
        } else {
        counts[1]++; // lose the toss
        pick.textContent = `You chose ${choice}.`;
        face.textContent = `The toss is ${result}`;
        outcome.textContent = `Sorry, wrong choice`;
        }
    
    score.textContent = `Wins = ${counts[0]}, Losses = ${counts[1]}`
});