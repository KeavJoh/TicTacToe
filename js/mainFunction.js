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