import './App.css';
import { updateScore } from './ScoreHandling';
import paddleLogo from './paddle.png';
import { playerRoster } from './playerRoster';
import { dragAndReorder } from './DragHandling';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Pocket Pong</h1>
      </header>
      <div id='upper half'>
        <div id='pocket row' style={{height: '250px'}}>
          <div id="pocketPlayer" className="paddleContainerPocket" draggable="false">
            <img src={paddleLogo} width='150' height='150' draggable="false"/>
            <div className='playerScore'>0</div>
            <div className ='playerName'>{playerRoster[0]}</div>
          </div>
        </div>
        <div id='center divider upper' style={{height: '175px'}}></div>
      </div>
      <div id='lower half'>
        <div id='center divider lower' style={{height: '175px'}}></div>
        <div id='lower row'>
          <button id="leftPlayer" className="paddleContainerLeft" draggable="true" onClick={() => updateScore('leftPlayer')} onDragEnd={(event) => dragAndReorder('leftPlayer', event)}>
            <img src={paddleLogo} width='150' height='150' draggable="false"/>
            <div className='playerScore'>0</div>
            <div className ='playerName'>{playerRoster[1]}</div>
          </button>
          <button id="rightPlayer" className="paddleContainerRight" draggable="true" onClick={() => updateScore('rightPlayer')} onDragEnd={(event) => dragAndReorder('rightPlayer', event)}>
            <img src={paddleLogo} width='150' height='150' draggable="false"/>
            <div className='playerScore'>0</div>
            <div className ='playerName'>{playerRoster[2]}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
