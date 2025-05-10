import { Player } from "./Player";
import { playerRoster } from "./playerRoster";

const updateScore = (elementName) => {

    let clickedButton = document.getElementById(elementName);
    let currentPlayer = clickedButton.getElementsByClassName('playerName')[0].innerText;

    let leftScoreDisplay = document.getElementById('leftPlayer').getElementsByClassName('playerScore')[0];
    let rightScoreDisplay = document.getElementById('rightPlayer').getElementsByClassName('playerScore')[0];

    let leftPlayerName = document.getElementById('leftPlayer').getElementsByClassName('playerName')[0];
    let rightPlayerName = document.getElementById('rightPlayer').getElementsByClassName('playerName')[0];

    //figure out which player it is and increment score
    switch (currentPlayer) {
        case playerRoster[0].name:
            playerRoster[0].incrementScore();
            clickedButton.getElementsByClassName('playerScore')[0].innerText = playerRoster[0].score;
            break;
        case playerRoster[1].name:
            playerRoster[1].incrementScore();
            clickedButton.getElementsByClassName('playerScore')[0].innerText = playerRoster[1].score;
            break;
        case playerRoster[2].name:
            playerRoster[2].incrementScore();
            clickedButton.getElementsByClassName('playerScore')[0].innerText = playerRoster[2].score;
            break;
        default:
            console.log('Error: Player not found');
    }

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


export {updateScore};