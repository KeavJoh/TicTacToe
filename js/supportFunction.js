function playerMove() {
    for (let i = 0; i < fieldContent.length; i++) {
        if (fieldContent[i] == 'cross') {
            // show cross
            document.getElementById(`cross-${i}`).classList.remove('dp-none');
        }

        if (fieldContent[i] == 'circle') {
            // show cirlce
            document.getElementById(`circle-${i}`).classList.remove('dp-none');
        }
    }
    counterPlayerMove++;
}



function setActivePlayerTwo() {
    document.getElementById('player-1').classList.remove('active-player-one');
    document.getElementById('player-2').classList.add('active-player-two');
    currentPlayer = 'circle';
}



function setActivePlayerOne() {
    document.getElementById('player-1').classList.add('active-player-one');
    document.getElementById('player-2').classList.remove('active-player-two');
    currentPlayer = 'cross';
}



function checkHorizontelLines() {
    if (fieldContent[0] == fieldContent[1] && fieldContent[1] == fieldContent[2] && fieldContent[0]) {
        horizontelWinnerLineOne();
        winner = fieldContent[0];
    }

    if (fieldContent[3] == fieldContent[4] && fieldContent[4] == fieldContent[5] && fieldContent[3]) {
        horizontelWinnerLineTwo();
        winner = fieldContent[3];
    }

    if (fieldContent[6] == fieldContent[7] && fieldContent[7] == fieldContent[8] && fieldContent[6]) {
        horizontelWinnerLineThree();
        winner = fieldContent[6];
    }
}



function horizontelWinnerLineOne() {
        document.getElementById('0').classList.add('win-background');
        document.getElementById('1').classList.add('win-background');
        document.getElementById('2').classList.add('win-background');
}



function horizontelWinnerLineTwo() {
        document.getElementById('3').classList.add('win-background');
        document.getElementById('4').classList.add('win-background');
        document.getElementById('5').classList.add('win-background');
}



function horizontelWinnerLineThree() {
        document.getElementById('6').classList.add('win-background');
        document.getElementById('7').classList.add('win-background');
        document.getElementById('8').classList.add('win-background');
}



function checkVerticalLines() {
    if (fieldContent[0] == fieldContent[3] && fieldContent[3] == fieldContent[6] && fieldContent[0]) {
        winner = fieldContent[0];
        verticalWinnerLineOne();
    }
    if (fieldContent[1] == fieldContent[4] && fieldContent[4] == fieldContent[7] && fieldContent[1]) {
        winner = fieldContent[1];
        verticalWinnerLineTwo();
    }
    if (fieldContent[2] == fieldContent[5] && fieldContent[5] == fieldContent[8] && fieldContent[2]) {
        winner = fieldContent[2];
        verticalWinnerLineThree();
    }
}



function verticalWinnerLineOne() {
    document.getElementById('0').classList.add('win-background');
    document.getElementById('3').classList.add('win-background');
    document.getElementById('6').classList.add('win-background');
}



function verticalWinnerLineTwo() {
    document.getElementById('1').classList.add('win-background');
    document.getElementById('4').classList.add('win-background');
    document.getElementById('7').classList.add('win-background');
}



function verticalWinnerLineThree() {
    document.getElementById('2').classList.add('win-background');
    document.getElementById('5').classList.add('win-background');
    document.getElementById('8').classList.add('win-background');
}



function checkDiagonalLines() {
    if (fieldContent[0] == fieldContent[4] && fieldContent[4] == fieldContent[8] && fieldContent[0]) {
        winner = fieldContent[0];
        diagonalWinnerLineOne();
    }
    if (fieldContent[2] == fieldContent[4] && fieldContent[4] == fieldContent[6] && fieldContent[2]) {
        winner = fieldContent[2];
        diagonalWinnerLineTwo();
    }
}



function diagonalWinnerLineOne() {
    document.getElementById('0').classList.add('win-background');
    document.getElementById('4').classList.add('win-background');
    document.getElementById('8').classList.add('win-background');
}



function diagonalWinnerLineTwo() {
    document.getElementById('2').classList.add('win-background');
    document.getElementById('4').classList.add('win-background');
    document.getElementById('6').classList.add('win-background');
}



function ifPlayerWinAnimation() {
    if (winner) {
        gameOver = true;
        setTimeout(function () {
            if (winner == 'circle') {
                playerOneWinAnimation();
            }
            if (winner == 'cross') {
                playerTwoWinAnimation();
            }
        }, 500);
    }
}



function playerOneWinAnimation() {
    counterPlayerOne++;
    document.getElementById('winner-font').innerHTML = `${playerOne} hat Gewonnen`;
    document.getElementById('winner-font').classList.add('winner-font');
    document.getElementById('counterPlayerOne').innerHTML = `${playerOne}: ${counterPlayerOne} Punkte`;
}



function playerTwoWinAnimation() {
    counterPlayerTwo++;
    document.getElementById('winner-font').innerHTML = `${playerTwo} hat Gewonnen`;
    document.getElementById('winner-font').classList.add('winner-font');
    document.getElementById('counterPlayerTwo').innerHTML = `${playerTwo}: ${counterPlayerTwo} Punkte`;
}



function whenDrawPlayAnimation() {
    if (counterPlayerMove == 9 && gameOver == false) {
        document.getElementById('winner-font').innerHTML = `Unentschieden`;
        document.getElementById('winner-font').classList.add('winner-font');
        addBackgroundColors();
    }
}



function addBackgroundColors() {
    for (let i = 0; i < fieldContent.length; i++) {
        if (fieldContent[i] == 'cross') {
            document.getElementById(`${i}`).classList.add('active-player-one');
        }
        if (fieldContent[i] == 'circle') {
            document.getElementById(`${i}`).classList.add('active-player-two');
        }
    }
}



function resetVariables() {
    winner = '';
    gameOver = false;
    fieldContent = [];
    counterPlayerMove = 0;
}



function resetAnimations() {
    document.getElementById('winner-font').innerHTML = 'Viel Glück';
    document.getElementById('winner-font').classList.remove('winner-font');
}



function resetBackgroundColors() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).classList.remove('win-background');
        document.getElementById(`${i}`).classList.remove('active-player-one');
        document.getElementById(`${i}`).classList.remove('active-player-two');
    }
}



function resetShapes() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cross-${i}`).classList.add('dp-none');
        document.getElementById(`circle-${i}`).classList.add('dp-none');
    }
}



function resetPlayers() {
    playerOne = 'Spieler 1';
    playerTwo = 'Spieler 2';
    counterPlayerOne = 0;
    counterPlayerTwo = 0;
}



function resetInputMenu() {
    document.getElementById('name-from-player-one').value = '';
    document.getElementById('name-from-player-two').value = '';
}



function displayMenu() {
    document.getElementById('playground').classList.add('dp-none');
    document.getElementById('main-menu').classList.remove('dp-none');
}



function setNameOfPlayerOne() {
    if (document.getElementById('name-from-player-one').value == '') {
        playerOne = 'Spieler 1'
    } else {
        playerOne = document.getElementById('name-from-player-one').value;
    }
}



function setNameOfPlayerTwo() {
    if (document.getElementById('name-from-player-two').value == '') {
        playerTwo = 'Spieler 2'
    } else {
        playerTwo = document.getElementById('name-from-player-two').value;
    }
}



function transmitNameOfPlayersToPlayground() {
    document.getElementById('player-one').innerHTML = `${playerOne}`;
    document.getElementById('player-two').innerHTML = `${playerTwo}`;
    document.getElementById('counterPlayerOne').innerHTML = `${playerOne}: ${counterPlayerOne} Punkte`;
    document.getElementById('counterPlayerTwo').innerHTML = `${playerTwo}: ${counterPlayerTwo} Punkte`;
}



function switchToPlayground() {
    document.getElementById('main-menu').classList.add('dp-none');
    document.getElementById('playground').classList.remove('dp-none');
}