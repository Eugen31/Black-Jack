
 
    // ``````````````````````````````````````````````````````````````````login page```````````````````````````````````````````````````````````````````````````````````
    // create an object for user profile
    let createUser = {
        name: '',
        balance : 0
    }

    // check if data input is valid and save values
    function checkName  () {
    createUser.name = document.getElementById('name').value;
    const message = document.querySelector('span')
    const hard = document.getElementById('hard').checked;
    const medium = document.getElementById('medium').checked;
    const easy = document.getElementById('easy').checked;
    const random = document.getElementById('random').checked;

        let radioBtn = true;
        let lvValue = 0
        switch (radioBtn) {
            case random:
                const randomValue = Math.floor(Math.random()*100)
                lvValue = randomValue;
                break;
            case hard :
                lvValue = 100;
                break;
            case medium: 
                lvValue = 500;
                break;
            case easy:
                lvValue = 1000;
                break;
            default:
                lvValue = 0;
        }

        message.textContent = lvValue;
        createUser.balance = lvValue;

    }
    
    // save user input data localy
    function saveDataLocaly() {
        const stringifyData = JSON.stringify(createUser)
        localStorage.setItem('userData', stringifyData)
    }

    // retrive and display user data from local storage.
    function showPlayerInfo() {
        const parseData = localStorage.getItem('userData');
        const showData = JSON.parse(parseData);
        createUser = showData;
        playerName.textContent = `User: ${createUser.name}`;
        playerBalance.textContent = `Balance: $ ${createUser.balance}`
    }

    // redirect to table game to play
    function startGame (e) {
        // prevent refresh page
        e = e || window.event;
        e.preventDefault();
        
        const nameValue = document.getElementById('name').value
        if (nameValue.length < 2) {
            alert('Please type a valid name');
        }else if(createUser.balance == 0 ) {
            alert('Please select your difficulty')
        } else {
            saveDataLocaly()
            window.location.replace("./table.html");
        }
    }


// ``````````````````````````````````````````````````````````````````````````table game``````````````````````````````````````````````````````````````````````````````````
    
    // player references
    const playerName =  document.getElementById('playerName');
    const playerBalance =  document.getElementById('playerBalance');
    const betInfo = document.querySelector('.player__profile h4');
    const playerBet = document.getElementById('bet');

    // btn controll references
    const hitBtn = document.querySelector('.hit_btn ');
    const standBtn = document.querySelector('.stand_btn');
    const betBtn = document.querySelector('.bet_btn');
    const playAgainBtn = document.querySelector('.playAgain__btn');

    //  dealer and player sum reference
    let dealearSum = document.querySelector('.cpu_choice h3');
    let playerSum = document.querySelector('.player_choice h3');
    const roundResultInfo = document.querySelector('.info__message h1');
    
    //  get reference for dealer and player cards
    const dealerCardsContainer = document.querySelector('.dealerCards');
    const playerCardsContainer = document.querySelector('.playerCards');



    // if player bet update current pot
    function updatePot () {
        if(playerBet.value < 0) {
            return alert('Please type a positive number')
        }
        betInfo.textContent = `Pot : $ ${playerBet.value * 2}`
    }


    // here store all cards
    const playingCards = [
        // club
        {
            name:'club1',
            url:'./assets/cards/club_1.png',
            value:11,
            isAce: true

        },
        {
            name:'club2',
            url:'./assets/cards/club_2.png',
            value:2,

        },
        {
            name:'club3',
            url:'./assets/cards/club_3.png',
            value:3,

        },
        {
            name:'club4',
            url:'./assets/cards/club_4.png',
            value:4,

        },
        {
            name:'club5',
            url:'./assets/cards/club_5.png',
            value:5,

        },
        {
            name:'club6',
            url:'./assets/cards/club_6.png',
            value:6,

        },
        {
            name:'club7',
            url:'./assets/cards/club_7.png',
            value:7,

        },
        {
            name:'club8',
            url:'./assets/cards/club_8.png',
            value:8,

        },
        {
            name:'club9',
            url:'./assets/cards/club_9.png',
            value:9,

        },
        {
            name:'club10',
            url:'./assets/cards/club_10.png',
            value:10,

        },
        {
            name:'clubJack',
            url:'./assets/cards/club_jack.png',
            value:10,

        },
        {
            name:'clubKing',
            url:'./assets/cards/club_king.png',
            value:10,

        },
        {
            name:'clubQueen',
            url:'./assets/cards/club_queen.png',
            value:10,

        },
        // diamond

        {
            name:'diamond1',
            url:'./assets/cards/diamond_1.png',
            value:11,
            isAce: true


        },
        {
            name:'diamond2',
            url:'./assets/cards/diamond_2.png',
            value:2,

        },
        {
            name:'diamond3',
            url:'./assets/cards/diamond_3.png',
            value:3,

        },
        {
            name:'diamond4',
            url:'./assets/cards/diamond_4.png',
            value:4,

        },
        {
            name:'diamond5',
            url:'./assets/cards/diamond_5.png',
            value:5,

        },
        {
            name:'diamond6',
            url:'./assets/cards/diamond_6.png',
            value:6,

        },
        {
            name:'diamond7',
            url:'./assets/cards/diamond_7.png',
            value:7,

        },
        {
            name:'diamond8',
            url:'./assets/cards/diamond_8.png',
            value:8,

        },
        {
            name:'diamond9',
            url:'./assets/cards/diamond_9.png',
            value:9,

        },
        {
            name:'diamond10',
            url:'./assets/cards/diamond_10.png',
            value:10,

        },
        {
            name:'diamondJack',
            url:'./assets/cards/diamond_jack.png',
            value:10,

        },
        {
            name:'diamondKing',
            url:'./assets/cards/diamond_king.png',
            value:10,

        },
        {
            name:'diamondQueen',
            url:'./assets/cards/diamond_queen.png',
            value:10,

        },

        // spade

        {
            name:'spade1',
            url:'./assets/cards/spade_1.png',
            value:11,
            isAce: true


        },
        {
            name:'spade2',
            url:'./assets/cards/spade_2.png',
            value:2,

        },
        {
            name:'spade3',
            url:'./assets/cards/spade_3.png',
            value:3,

        },
        {
            name:'spade4',
            url:'./assets/cards/spade_4.png',
            value:4,

        },
        {
            name:'spade5',
            url:'./assets/cards/spade_5.png',
            value:5,

        },
        {
            name:'spade6',
            url:'./assets/cards/spade_6.png',
            value:6,

        },
        {
            name:'spade7',
            url:'./assets/cards/spade_7.png',
            value:7,

        },
        {
            name:'spade8',
            url:'./assets/cards/spade_8.png',
            value:8,

        },
        {
            name:'spade9',
            url:'./assets/cards/spade_9.png',
            value:9,

        },
        {
            name:'spade10',
            url:'./assets/cards/spade_10.png',
            value:10,

        },
        {
            name:'spadeJack',
            url:'./assets/cards/spade_jack.png',
            value:10,

        },
        {
            name:'spadeKing',
            url:'./assets/cards/spade_king.png',
            value:10,

        },
        {
            name:'spadeQueen',
            url:'./assets/cards/spade_queen.png',
            value:10,

        },

        // heart
        {
            name:'heart1',
            url:'./assets/cards/heart_1.png',
            value:11,
            isAce: true


        },
        {
            name:'heart2',
            url:'./assets/cards/heart_2.png',
            value:2,

        },
        {
            name:'heart3',
            url:'./assets/cards/heart_3.png',
            value:3,

        },
        {
            name:'heart4',
            url:'./assets/cards/heart_4.png',
            value:4,

        },
        {
            name:'heart5',
            url:'./assets/cards/heart_5.png',
            value:5,

        },
        {
            name:'heart6',
            url:'./assets/cards/heart_6.png',
            value:6,

        },
        {
            name:'heart7',
            url:'./assets/cards/heart_7.png',
            value:7,

        },
        {
            name:'heart8',
            url:'./assets/cards/heart_8.png',
            value:8,

        },
        {
            name:'heart9',
            url:'./assets/cards/heart_9.png',
            value:9,

        },
        {
            name:'heart10',
            url:'./assets/cards/heart_10.png',
            value:10,

        },
        {
            name:'heartJack',
            url:'./assets/cards/heart_jack.png',
            value:10,

        },
        {
            name:'heartKing',
            url:'./assets/cards/heart_king.png',
            value:10,

        },
        {
            name:'heartQueen',
            url:'./assets/cards/heart_queen.png',
            value:10,

        }

    ];


    // make a copy of original array of cards
     let copyOfPlayingCards = JSON.parse(JSON.stringify(playingCards));

    // suffle cards deck
    copyOfPlayingCards.sort (()=> 0.5 - Math.random());
    
    // create 2 arrays to hold player and dealer cards.
    let dealerCards = [];
    let playerCards = [];

    // create 2 var to hold player and dealer cards value
    let dealerCardsSum = 0;
    let playerCardsSum = 0;


    // create a function to enable or disable btn
    function disableMultiBtn () {
            disableBtn(hitBtn)
            disableBtn(standBtn);
        }
    const enableBtn = btn => btn.disabled = false;
    const disableBtn = btn => btn.disabled = true;
    
 
    // create a function to draw cards for dealear and player.
    function drawCard(a, b , x) {
        return x.push(...copyOfPlayingCards.splice(a, b))
    }

    // spread cards to dealer and player.
    function spredCards () {
        drawCard(0, 1, dealerCards);
        drawCard(0, 2, playerCards);
    }

    // render dealer and player cards.
    function randerCards () {

        playerCardsContainer.innerHTML =  '';
        dealerCardsContainer.innerHTML = 
        `<div class = 'backCard'>
            <img src='./assets/cards/back.png' alt='back card' width='100px' />
        </div>`;

        playerCards.forEach(card =>{
            playerCardsContainer.innerHTML +=
            `<div>
                <img src='${card.url}' alt='${card.name}' width='100px' />
            </div>`
        })

        dealerCards.forEach(card =>{
            dealerCardsContainer.innerHTML +=
            `<div>
                <img src='${card.url}' alt='${card.name}' width='100px' />
            </div>`
        })
    }

    //  create a function to check if ballance is 0
    function checkBalance () {
        if(createUser.balance == 0) {
            alert(`You lost all your money!
                    Now you will be redirect to start page`);
            window.location.replace("./index.html");
        }
    }


    // store and display the sum
    function storeAndDisplaySum () {
        dealerCardsSum = dealerCards.reduce((acc, card)=> {
            return acc + card.value;
        },0)

        playerCardsSum = playerCards.reduce((acc, card)=> {
            return acc + card.value;
        },0)


 
         if( dealerCardsSum >21)  {
            if(dealerCards.find(card => card.isAce === true)){
                dealerCardsSum -= 10;
            }
         }
         if( playerCardsSum >21)  {
            if(playerCards.find(card => card.isAce === true)){
                playerCardsSum -= 10;
            }
         }

        dealearSum.textContent = `Dealer's hand sum : ${dealerCardsSum}` 
        playerSum.textContent = `Your hand sum : ${playerCardsSum}`
    }

    // compare the results
    function compareResults () {
        if(playerCardsSum == 21) {
            roundResultInfo.textContent = `Congratulation ${createUser.name}, You hit 21!`;
            playerBalance.textContent = `Balance: $ ${createUser.balance += playerBet.value*2}`
            disableMultiBtn()
        }

        if(playerCardsSum > 21) {
            roundResultInfo.textContent = `Bad luck ${createUser.name}, You lose!`;
            disableMultiBtn()
            }
        }

    function compareDealerResults(){

        switch(true) {
            case dealerCardsSum == 21:
                roundResultInfo.textContent = `Dealer hit 21, You lose`;
                break; 
            case dealerCardsSum > 21:
                roundResultInfo.textContent = `Dealer busted!, You Win`;
                playerBalance.textContent = `Balance: $ ${createUser.balance += playerBet.value*2}`
                break;
            case dealerCardsSum == playerCardsSum:
                roundResultInfo.textContent = `It's seems we have a draw, You need to play again`;
                playerBalance.textContent = `Balance: $ ${createUser.balance += playerBet.value*1}`
                break;
            case dealerCardsSum > playerCardsSum:
                roundResultInfo.textContent = `Dealer Wins, You lose`;
                break;
            default:
                stand()
        }
    }
        
    // after player bet start game
    function bet() {

        // here we call necesary function for start playing

        // check if player have enough money to bet, and place a valid bet
        if(playerBet.value < 0) {
            return alert('Please type a valid number')
        }
        if(playerBet.value > createUser.balance){
            return alert(`You can't bet more then you have`)
        }

        roundResultInfo.textContent = '';

        // disable bet input and some buttons after game start
        playerBet.setAttribute("disabled", "");
        playerBalance.textContent = `Balance: $ ${createUser.balance -= playerBet.value}`;

        disableBtn(betBtn);
        enableBtn(standBtn);
        enableBtn(hitBtn);

        spredCards();
        randerCards()
        storeAndDisplaySum()
        compareResults()
        saveDataLocaly();

    }

    // draw one more card and evaluate the result
    function hit () {
        drawCard(0, 1, playerCards);
        randerCards();
        storeAndDisplaySum()
        compareResults()
        // setTimeout(checkBalance, 800) 
    }

    // allow cpu to draw cards
    function stand () {
        disableMultiBtn()
        drawCard(0, 1, dealerCards);
        randerCards();
        storeAndDisplaySum()
        compareDealerResults()

        const backCard = document.querySelector('.backCard');
        backCard.classList.add('hide')
       
    }

    // reset and clear all temporary data to play another round
    function playAgain () {
        
        checkBalance()
        enableBtn(betBtn)
        
        dealerCards = []
        playerCards = []

        dealerCardsContainer.innerHTML = '';
        playerCardsContainer.innerHTML = '';

        playerBet.removeAttribute("disabled");

        // betInfo.textContent = `Pot : $ ${playerBet.value * 2}`
        roundResultInfo.textContent = `Place a bet, 
         to start the game`;
        
        dealerCardsSum = 0;
        playerCardsSum = 0;

       
        dealearSum.textContent = '';
        playerSum.textContent = '';


        // make a copy of original array of cards
        copyOfPlayingCards = JSON.parse(JSON.stringify(playingCards));

        //  randomize deck cards
        copyOfPlayingCards.sort (()=> 0.5 - Math.random())

    }



 

