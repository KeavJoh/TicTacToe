function startGame() {
    setNameOfPlayerOne();
    setNameOfPlayerTwo();
    transmitNameOfPlayersToPlayground();
    switchToPlayground();
}



function playerSelectField(id) {
    if (!fieldContent[id] && !gameOver) {

        if (currentPlayer == 'cross') {
            setActivePlayerTwo();
        } else {
            setActivePlayerOne();
        }
        fieldContent[id] = currentPlayer;
        playerMove();
        checkIfWin();
        checkIfDraw();
    }
}



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



function checkIfWin() {
    checkHorizontelLines();
    checkVerticalLines();
    checkDiagonalLines();
    ifPlayerWinAnimation();
}



function checkIfDraw() {
    whenDrawPlayAnimation();
}



function restartGame() {
    resetVariables();
    resetAnimations();
    resetBackgroundColors();
    resetShapes();
}



function mainMenu() {
    restartGame();
    resetPlayers();
    resetInputMenu();
    displayMenu();
}