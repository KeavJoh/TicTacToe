let fieldContent = [];

let gameOver = false;
let currentPlayer = 'cross';

function fillField(id) {

    if (!fieldContent[id] && !gameOver) {

        if ( currentPlayer == 'cross') {
            currentPlayer = 'circle';
            document.getElementById('player-1').classList.remove('active-player');
            document.getElementById('player-2').classList.add('active-player');
        } else {
            currentPlayer = 'cross';
            document.getElementById('player-1').classList.add('active-player');
            document.getElementById('player-2').classList.remove('active-player');
        }
    
        fieldContent[id] = currentPlayer;
        playerMove();
        checkIfWin();
    }
}



function playerMove() {
    for (let i = 0; i < fieldContent.length; i++) {
        if (fieldContent[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('dp-none');
        }

        if (fieldContent[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('dp-none');
        }
    }
}



function checkIfWin() {
    let winner;

    if (fieldContent[0] == fieldContent[1] && fieldContent[1] == fieldContent[2] && fieldContent[0]) {
        winner = fieldContent[0];
        setTimeout(function() {
            document.getElementById('0').classList.add('win-background');
            document.getElementById('1').classList.add('win-background');
            document.getElementById('2').classList.add('win-background');
        }, 500);
    }

    if (fieldContent[3] == fieldContent[4] && fieldContent[4] == fieldContent[5] && fieldContent[3]) {
        winner = fieldContent[3];
        document.getElementById('3').classList.add('win-background');
        document.getElementById('4').classList.add('win-background');
        document.getElementById('5').classList.add('win-background');
    }

    if (fieldContent[6] == fieldContent[7] && fieldContent[7] == fieldContent[8] && fieldContent[6]) {
        winner = fieldContent[6];
        document.getElementById('6').classList.add('win-background');
        document.getElementById('7').classList.add('win-background');
        document.getElementById('8').classList.add('win-background');
    }

    if (fieldContent[0] == fieldContent[3] && fieldContent[3] == fieldContent[6] && fieldContent[0]) {
        winner = fieldContent[0];
        document.getElementById('0').classList.add('win-background');
        document.getElementById('3').classList.add('win-background');
        document.getElementById('6').classList.add('win-background');
    }

    if (fieldContent[1] == fieldContent[4] && fieldContent[4] == fieldContent[7] && fieldContent[1]) {
        winner = fieldContent[1];
        document.getElementById('1').classList.add('win-background');
        document.getElementById('4').classList.add('win-background');
        document.getElementById('7').classList.add('win-background');
    }

    if (fieldContent[2] == fieldContent[5] && fieldContent[5] == fieldContent[8] && fieldContent[2]) {
        winner = fieldContent[2];
        document.getElementById('2').classList.add('win-background');
        document.getElementById('5').classList.add('win-background');
        document.getElementById('8').classList.add('win-background');
    }

    if (fieldContent[0] == fieldContent[4] && fieldContent[4] == fieldContent[8] && fieldContent[0]) {
        winner = fieldContent[0];
        document.getElementById('0').classList.add('win-background');
        document.getElementById('4').classList.add('win-background');
        document.getElementById('8').classList.add('win-background');
    }

    if (fieldContent[2] == fieldContent[4] && fieldContent[4] == fieldContent[6] && fieldContent[2]) {
        winner = fieldContent[2];
        document.getElementById('2').classList.add('win-background');
        document.getElementById('4').classList.add('win-background');
        document.getElementById('6').classList.add('win-background');
    }

    if (winner) {
        gameOver = true;
        setTimeout(function() {
            document.getElementById('winner-font').innerHTML = 'Du hast Gewonnen';
            document.getElementById('winner-font').classList.add('winner-font');
        }, 500);
    }
}



function restartGame() {
    gameOver = false;
    fieldContent = [];
    document.getElementById('winner-font').innerHTML = 'Viel Glück';
    document.getElementById('winner-font').classList.remove('winner-font');

    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).classList.remove('win-background');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cross-${i}`).classList.add('dp-none');
        document.getElementById(`circle-${i}`).classList.add('dp-none');
    }
}