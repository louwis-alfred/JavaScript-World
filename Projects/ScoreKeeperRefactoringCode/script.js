const p1 = {
    score: 0,
    button: document.getElementById('player1BTN'),
    display: document.getElementById('player1Score')
}
const p2 = {
    score: 0,
    button: document.getElementById('player2BTN'),
    display: document.getElementById('player2Score')
}

const resetBTN = document.getElementById('reset');
const winningScoreSelect = document.getElementById('playto');

let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2)
})


p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset();
})


resetBTN.addEventListener('click', reset);

function reset() {
    isGameOver = false;

    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}