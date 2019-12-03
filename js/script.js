{
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });

    const playGame = function (playerInput) {
        clearMessages();
        const getMoveName = function (moveId) {
            if (moveId == 1) {
                return 'kamień';
            }
            if (moveId == 2) {
                return 'papier';
            }
            if (moveId == 3) {
                return 'nożyce';
            }

        }

        const randomNumber = Math.floor(Math.random() * 3 + 1),
            computerMove = getMoveName(randomNumber),
            playerMove = getMoveName(playerInput);


        const displayResult = function () {

            printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove + '.');

            if (computerMove == 'kamień' && playerMove == 'papier') {
                printMessage('Ty wygrywasz!');
                playerWin();
            } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
                printMessage('Ja wygrywam!');
                computerWin();
            } else if (computerMove == 'kamień' && playerMove == 'kamień') {
                printMessage('Remis!');
            } else if (computerMove == 'papier' && playerMove == 'kamień') {
                printMessage('Ja wygrywam!');
                computerWin();
            } else if (computerMove == 'papier' && playerMove == 'papier') {
                printMessage('Remis!');
            } else if (computerMove == 'papier' && playerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
                playerWin();
            } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                playerWin();
            } else if (computerMove == 'nożyce' && playerMove == 'papier') {
                printMessage('Ja wygrywam!');
                computerWin();
            } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
                printMessage('Remis!');
            }
        }

        displayResult(computerMove, playerMove);
    }

    let playerResult = 0,
        computerResult = 0;

        function playerWin(){
            let displayPlayerResult = ++playerResult;
            console.log('Gracz wygrywa!: ', displayPlayerResult);
        }
        
        function computerWin(){
            let displayComputerResult = ++computerResult;
            console.log('Komputer wygrywa!: ', displayComputerResult);          
        }

        // printResult(displayPlayerResult + ' : ' + displayComputerResult);

}