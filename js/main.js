let fieldContent = [];

let currentPlayer = 'cross';

function fillField(id) {

    if (!fieldContent[id]) {

        if ( currentPlayer == 'cross') {
            currentPlayer = 'circle';
            document.getElementById('player-1').classList.remove('active-player')
            document.getElementById('player-2').classList.add('active-player')
        } else {
            currentPlayer = 'cross';
            document.getElementById('player-1').classList.add('active-player')
            document.getElementById('player-2').classList.remove('active-player')
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
        document.getElementById('0').classList.add('win-background');
        document.getElementById('1').classList.add('win-background');
        document.getElementById('2').classList.add('win-background');
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
        console.log('Gewonnen ' + winner);
    }
}