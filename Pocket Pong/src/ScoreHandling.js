const updateScore = (elementName) => {

    let clickedButton = document.getElementById(elementName);
    let currentPlayer = clickedButton.getElementsByClassName('playerName')[0].innerText;

    //update score value
    let currentScore = Number(clickedButton.getElementsByClassName('playerScore')[0].innerText);
    clickedButton.getElementsByClassName('playerScore')[0].innerText = currentScore + 1;



    if(document.getElementById('lower row').childElementCount == 2) {
        
        //lower row still has two buttons        
        let leftScoreDisplay = document.getElementById('leftPlayer').getElementsByClassName('playerScore')[0];
        let rightScoreDisplay = document.getElementById('rightPlayer').getElementsByClassName('playerScore')[0];

        let leftPlayerName = document.getElementById('leftPlayer').getElementsByClassName('playerName')[0];
        let rightPlayerName = document.getElementById('rightPlayer').getElementsByClassName('playerName')[0];

        updateLowerDisplay(leftPlayerName, leftScoreDisplay, rightPlayerName, rightScoreDisplay);
        checkWinCondition (leftScoreDisplay, rightScoreDisplay);
    }
    else {
        //lower row only has one button
        console.log("asdfasdf");
    }


};

const updateLowerDisplay = (leftPlayerName, leftScoreDisplay, rightPlayerName, rightScoreDisplay) => {
    
    //update displayed position of players based on the non-pocket players scores
    if(Number(leftScoreDisplay.innerText) > Number(rightScoreDisplay.innerText)) {
        let tempName = leftPlayerName.innerText;
        let tempScore = leftScoreDisplay.innerText;
        
        leftPlayerName.innerText = rightPlayerName.innerText;
        leftScoreDisplay.innerText = rightScoreDisplay.innerText;

        rightPlayerName.innerText = tempName;
        rightScoreDisplay.innerText = tempScore;
    }
};

const checkWinCondition = (leftScoreDisplay, rightScoreDisplay) => {

    if(Number(leftScoreDisplay.innerText) >= 11) {
        
        if(document.getElementById('leftPlayer') != null) {
            //left player wins, remove left player button
            document.getElementById('leftPlayer').remove();

            //make pocket player clickable
            document.getElementById('pocketPlayer').onclick = () => updateScore('pocketPlayer');
            document.getElementById('pocketPlayer').style = "cursor: pointer;";

            //make remaining lower player undraggable
            document.getElementById('rightPlayer').draggable = false;
        }
    }
    else if(Number(rightScoreDisplay.innerText) >= 11) {
        
        if(document.getElementById('rightPlayer') != null) {
            //left player wins, remove left player button
            document.getElementById('rightPlayer').remove();

            //make pocket player clickable
            document.getElementById('pocketPlayer').onclick = () => updateScore('pocketPlayer');
            document.getElementById('pocketPlayer').style = "cursor: pointer;";

            //make remaining lower player undraggable
            document.getElementById('leftPlayer').draggable = false;
        }
    }
};


export {updateScore, updateLowerDisplay};