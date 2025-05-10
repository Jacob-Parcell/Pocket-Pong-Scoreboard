import './App.css';
import { Player } from './Player';
import { updateScore } from './ScoreHandling';
import paddleLogo from './paddle.png';
import { playerRoster } from './playerRoster';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Pocket Pong</h1>
      </header>
      <div id='pocket row' style={{height: '250px'}}>
        <div id="pocketPlayer" className="paddleContainerPocket" draggable="false">
          <img src={paddleLogo} width='150' height='150' draggable="false"/>
          <div className='playerScore'>{playerRoster[0].score}</div>
          <div className ='playerName'>{playerRoster[0].name}</div>
        </div>
      </div>
      <div id='center divider' style={{height: '350px'}}></div>
      <div id='lower row'>
        <button id="leftPlayer" className="paddleContainerLeft" draggable="true" onClick={() => updateScore('leftPlayer')}>
          <img src={paddleLogo} width='150' height='150' draggable="false"/>
          <div className='playerScore'>{playerRoster[1].score}</div>
          <div className ='playerName'>{playerRoster[1].name}</div>
        </button>
        <button id="rightPlayer" className="paddleContainerRight" draggable="true" onClick={() => updateScore('rightPlayer')}>
          <img src={paddleLogo} width='150' height='150' draggable="false"/>
          <div className='playerScore'>{playerRoster[2].score}</div>
          <div className ='playerName'>{playerRoster[2].name}</div>
        </button>
      </div>
    </div>
  );
}

export default App;
