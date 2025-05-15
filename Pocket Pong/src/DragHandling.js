import { updateLowerDisplay } from "./ScoreHandling";

const dragAndReorder = (elementName, event) => {

    let draggedButton = document.getElementById(elementName);

    let droppedYCoordinate = event.clientY;

    let droppableArea = document.getElementById('upper half');
    let upperHalfCoordinate = droppableArea.getBoundingClientRect().y + droppableArea.getBoundingClientRect().height;

    if(droppedYCoordinate <= upperHalfCoordinate) {

        //dropped in upper half
        let draggedPlayerName = draggedButton.getElementsByClassName('playerName')[0];
        let pocketPlayerName =  document.getElementById('pocketPlayer').getElementsByClassName('playerName')[0];

        let draggedScoreDisplay = draggedButton.getElementsByClassName('playerScore')[0];
        let pocketScoreDisplay = document.getElementById('pocketPlayer').getElementsByClassName('playerScore')[0];

        console.log(`Dragged player name: ${draggedPlayerName}. Pocket player name: ${pocketPlayerName}`);

        swapPocketPlayer(pocketPlayerName, pocketScoreDisplay, draggedPlayerName, draggedScoreDisplay);
        updateOrder();
    }

};

const updateOrder = () => {
    let leftScoreDisplay = document.getElementById('leftPlayer').getElementsByClassName('playerScore')[0];
    let rightScoreDisplay = document.getElementById('rightPlayer').getElementsByClassName('playerScore')[0];

    let leftPlayerName = document.getElementById('leftPlayer').getElementsByClassName('playerName')[0];
    let rightPlayerName = document.getElementById('rightPlayer').getElementsByClassName('playerName')[0];

    updateLowerDisplay(leftPlayerName, leftScoreDisplay, rightPlayerName, rightScoreDisplay);
}

const swapPocketPlayer = (pocketPlayerName, pocketScoreDisplay, draggedPlayerName, draggedScoreDisplay) => {

    //swap pocket player with given dragged player
    let tempName = pocketPlayerName.innerText;
    let tempScore = pocketScoreDisplay.innerText;
    
    pocketPlayerName.innerText = draggedPlayerName.innerText;
    pocketScoreDisplay.innerText = draggedScoreDisplay.innerText;

    draggedPlayerName.innerText = tempName;
    draggedScoreDisplay.innerText = tempScore;
};

export {dragAndReorder};