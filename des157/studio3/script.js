console.log("JS Loading");
(function(){
    // const p1sound = new Audio('sounds/player1.m4a')
    // const p2sound = new Audio('sounds/player2.m4a')
    var sound;
    const snake = new Audio('sounds/snake.m4a')
    var startGame = document.getElementById('startgame');
	var gameControl = document.getElementById('gamecontrol');
	var game = document.getElementById('game');
	var score = document.getElementById('score');
	var actionArea = document.getElementById('actions');
    var gameData = {
        dice: ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 
            'images/dice4.png', 'images/dice5.png', 'images/dice6.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
        psounds: ['sounds/player1.m4a','sounds/player2.m4a']
    };

    startGame.addEventListener('click', function(){

        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        })

        console.log("set up Turn!")
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>${gameData.players[gameData.index]}</p>`;
        sound = new Audio(gameData.psounds[gameData.index]);
        sound.play();
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        })
    };

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML = `<p>${gameData.players[gameData.index]} </p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;//total of rolls

        console.log(gameData)

        //Handling if snake eyes is rolled, a one is rolled or none of the two
        if(gameData.rollSum ==2){
            snake.play();
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index =0) : (gameData.index = 1) //a simpler if statement to swap the player
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        }
        else if(gameData.roll1 === 1 || gameData.roll2 ===1){
            gameData.index ? (gameData.index =0) : (gameData.index = 1) //a simpler if statement to swap the player
            game.innerHTML += `<p>Sorry one of your rolls is a one. Switching to ${gameData.players[gameData.index]}.</p>`
            setTimeout(setUpTurn, 4000);

        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum; //updates the players scores
            actionArea.innerHTML = '<button id="rolldice">Roll Dice</button>';

            document.getElementById('rolldice').addEventListener('click', function(){
                throwDice();
            })
            // document.getElementById('pass').addEventListener('click', function(){
            //     gameData.index ? (gameData.index =0) : (gameData.index = 1) //a simpler if statement to swap the player
            //     throwDice();
            // })

            checkWin();
        }

    };

    function checkWin(){
        //checks is current scroe is greater that 29
       if(gameData.score[gameData.index] > gameData.gameEnd){
           score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

           actionArea.innerHTML = "";
           document.getElementById('quit').innerHTML = "Start a New Game"
       }
       else{
           showCurrentScore();
       }
    };

    //check what current score is
    function showCurrentScore(){
        score.innerHTML = `<p>${gameData.players[0]}: ${gameData.score[0]}       ${gameData.players[1]}: ${gameData.score[1]} </p>`
    };
} ())