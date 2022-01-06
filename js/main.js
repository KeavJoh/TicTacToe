let fieldContent = [];

let currentPlayer = 'cross';

function fillField(id) {
    if ( currentPlayer == 'cross') {
        currentPlayer = 'circle';
    } else {
        currentPlayer = 'cross';
    }

    fieldContent[id] = currentPlayer;
    playerMove();
    checkIfWin();
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

    if (fieldContent[0] == fieldContent[1] && fieldContent[2] == fieldContent[0]) {
        winner = fieldContent[0];
    }

    if (fieldContent[3] == fieldContent[4] && fieldContent[5] == fieldContent[3]) {
        winner = fieldContent[3];
    }

    if (fieldContent[6] == fieldContent[7] && fieldContent[8] == fieldContent[6]) {
        winner = fieldContent[6];
    }

    if (fieldContent[0] == fieldContent[3] && fieldContent[6] == fieldContent[0]) {
        winner = fieldContent[0];
    }

    if (fieldContent[1] == fieldContent[4] && fieldContent[7] == fieldContent[1]) {
        winner = fieldContent[1];
    }

    if (fieldContent[2] == fieldContent[5] && fieldContent[8] == fieldContent[2]) {
        winner = fieldContent[0];
    }

    if (fieldContent[0] == fieldContent[4] && fieldContent[8] == fieldContent[0]) {
        winner = fieldContent[0];
    }

    if (fieldContent[2] == fieldContent[4] && fieldContent[6] == fieldContent[2]) {
        winner = fieldContent[2];
    }

    if (winner) {
        console.log('Gewonnen ' + winner);
    }
}