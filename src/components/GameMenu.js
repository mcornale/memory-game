import Button from './Button';

import { MAX_NUM_OF_PLAYERS, GAME_GRID_SIZES, GAME_THEMES } from '../constants';
import { useSelector } from 'react-redux';

const GameMenu = (props) => {
  const gridSize = useSelector((state) => state.gameSettings.gridSize);
  const numOfPlayers = useSelector((state) => state.gameSettings.numOfPlayers);
  const gridTheme = useSelector((state) => state.gameSettings.gridTheme);

  const themeButtons = [];
  const numOfPlayersButtons = [];
  const gridSizeButtons = [];

  for (const key in GAME_THEMES) {
    themeButtons.push(
      <Button
        key={key}
        type={`menu-selection${
          GAME_THEMES[key] === gridTheme ? '-active' : ''
        }`}
      >
        {GAME_THEMES[key][0].toUpperCase() + GAME_THEMES[key].slice(1)}
      </Button>
    );
  }

  for (let i = 0; i < MAX_NUM_OF_PLAYERS; i++) {
    numOfPlayersButtons.push(
      <Button
        key={i}
        type={`menu-selection${i + 1 === numOfPlayers ? '-active' : ''}`}
      >
        {i + 1}
      </Button>
    );
  }

  for (const key in GAME_GRID_SIZES) {
    gridSizeButtons.push(
      <Button
        key={key}
        type={`menu-selection${
          GAME_GRID_SIZES[key] === gridSize ? '-active' : ''
        }`}
      >
        {key}
      </Button>
    );
  }

  return (
    <div className='game-menu'>
      <h3>Select Theme</h3>
      <div className='game-menu-buttons'>{themeButtons}</div>
      <h3>Numbers of Players</h3>
      <div className='game-menu-buttons'>{numOfPlayersButtons}</div>
      <h3>Grid Size</h3>
      <div className='game-menu-buttons'>{gridSizeButtons}</div>
      <Button onClick={props.onGameStart} type='menu-start'>
        Start Game
      </Button>
    </div>
  );
};

export default GameMenu;
