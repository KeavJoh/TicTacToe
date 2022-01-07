let fieldContent = [];

let playerOne;
let playerTwo;
let counterPlayerOne = 0;
let counterPlayerTwo = 0;

let gameOver = false;
let currentPlayer = 'cross';

function fillField(id) {


    if (!fieldContent[id] && !gameOver) {

        if (currentPlayer == 'cross') {
            currentPlayer = 'circle';
            document.getElementById('player-1').classList.remove('active-player-one');
            document.getElementById('player-2').classList.add('active-player-two');
        } else {
            currentPlayer = 'cross';
            document.getElementById('player-1').classList.add('active-player-one');
            document.getElementById('player-2').classList.remove('active-player-two');
        }

        fieldContent[id] = currentPlayer;
        playerMove();
        checkIfWin();
        checkIfTie()
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
        setTimeout(function () {
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
        setTimeout(function () {
            if (winner == 'circle') {
                document.getElementById('winner-font').innerHTML = `${playerOne} hat Gewonnen`;
                document.getElementById('winner-font').classList.add('winner-font');
                counterPlayerOne++;
                document.getElementById('counterPlayerOne').innerHTML = `${playerOne}: ${counterPlayerOne} Punkte`;
            }
            if (winner == 'cross') {
                document.getElementById('winner-font').innerHTML = `${playerTwo} hat Gewonnen`;
                document.getElementById('winner-font').classList.add('winner-font');
                counterPlayerTwo++;
                document.getElementById('counterPlayerTwo').innerHTML = `${playerTwo}: ${counterPlayerTwo} Punkte`;
            }
        }, 500);
    }
}



function checkIfTie() {
    if (typeof fieldContent[0] == 'string' && typeof fieldContent[1] == 'string' && typeof fieldContent[2] == 'string' && typeof fieldContent[3] == 'string' && typeof fieldContent[4] == 'string' && typeof fieldContent[5] == 'string' && typeof fieldContent[6] == 'string' && typeof fieldContent[7] == 'string' && typeof fieldContent[8] == 'string' && gameOver == false) {
        document.getElementById('winner-font').innerHTML = `Unentschieden`;
        document.getElementById('winner-font').classList.add('winner-font');

        for (let i = 0; i < fieldContent.length; i++) {
            if (fieldContent[i] == 'cross') {
                document.getElementById(`${i}`).classList.add('active-player-one');
            }
            if (fieldContent[i] == 'circle') {
                document.getElementById(`${i}`).classList.add('active-player-two');
            }
        }
    }
}



function restartGame() {
    gameOver = false;
    fieldContent = [];
    document.getElementById('winner-font').innerHTML = 'Viel Glück';
    document.getElementById('winner-font').classList.remove('winner-font');

    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).classList.remove('win-background');
        document.getElementById(`${i}`).classList.remove('active-player-one');
        document.getElementById(`${i}`).classList.remove('active-player-two');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cross-${i}`).classList.add('dp-none');
        document.getElementById(`circle-${i}`).classList.add('dp-none');
    }
}



function mainMenu() {
    restartGame();
    playerOne = 'Spieler 1';
    playerTwo = 'Spieler 2';
    counterPlayerOne = 0;
    counterPlayerTwo = 0;
    document.getElementById('name-from-player-one').value = '';
    document.getElementById('name-from-player-two').value = '';
    document.getElementById('playground').classList.add('dp-none');
    document.getElementById('main-menu').classList.remove('dp-none');
}



function startGame() {

    if (document.getElementById('name-from-player-one').value == '') {
        playerOne = 'Spieler 1'
    } else {
        playerOne = document.getElementById('name-from-player-one').value;
    }

    if (document.getElementById('name-from-player-two').value == '') {
        playerTwo = 'Spieler 2'
    } else {
        playerTwo = document.getElementById('name-from-player-two').value;
    }

    document.getElementById('player-one').innerHTML = `${playerOne}`;
    document.getElementById('player-two').innerHTML = `${playerTwo}`;

    document.getElementById('counterPlayerOne').innerHTML = `${playerOne}: ${counterPlayerOne} Punkte`;
    document.getElementById('counterPlayerTwo').innerHTML = `${playerTwo}: ${counterPlayerTwo} Punkte`;

    document.getElementById('main-menu').classList.add('dp-none');
    document.getElementById('playground').classList.remove('dp-none');
}