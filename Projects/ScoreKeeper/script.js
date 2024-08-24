const player1BTN = document.getElementById('player1BTN');
const player2BTN = document.getElementById('player2BTN');
const resetBTN = document.getElementById('reset');
const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');
const winningScoreSelect = document.getElementById('playto');

let winningScore = 3;
let player1Score = 0;
let player2Score = 0;
let isGameOver = false;

player1BTN.addEventListener('click', () => {
    if (!isGameOver) {
        player1Score += 1;
        if (player1Score === winningScore) {
            isGameOver = true;
            player1ScoreDisplay.classList.add('has-text-success')
            player2ScoreDisplay.classList.add('has-text-danger')
            player1BTN.disabled = true;
            player2BTN.disabled = true;
        }
        player1ScoreDisplay.textContent = player1Score;
    }
})

player2BTN.addEventListener('click', () => {
    if (!isGameOver) {
        player2Score += 1;
        if (player2Score === winningScore) {
            isGameOver = true;
            player2ScoreDisplay.classList.add('has-text-success')
            player1ScoreDisplay.classList.add('has-text-danger')
            player1BTN.disabled = true;
            player2BTN.disabled = true;
        }
        player2ScoreDisplay.textContent = player2Score;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset();
})


resetBTN.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    // Set the players scores to 0
    player1Score = 0;
    player2Score = 0;
    // Display the score
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
    // Remove the classlist
    player1ScoreDisplay.classList.remove('has-text-success', 'has-text-danger')
    player2ScoreDisplay.classList.remove('has-text-success', 'has-text-danger')
    // Reseting the buttons to default
    player1BTN.disabled = false;
    player2BTN.disabled = false;
}