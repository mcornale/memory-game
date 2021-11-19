import Button from './Button';
import { MAX_NUM_OF_PLAYERS, GAME_GRID_SIZES, GAME_THEMES } from '../constants';
import { useDispatch } from 'react-redux';
import { setSettings } from '../store/gameSlice';
import { toggleModalVisibility } from '../store/modalMenuSlice';
import firstCapitalLetter from '../helpers/firstCapitalLetter';
import { useState } from 'react';

const GameMenu = () => {
  const [gridSize, setGridSize] = useState(GAME_GRID_SIZES);
  const [numOfPlayers, setNumOfPlayers] = useState(1);
  const [gridTheme, setGridTheme] = useState(GAME_THEMES);

  const dispatch = useDispatch();

  const themeButtons = [];
  const numOfPlayersButtons = [];
  const gridSizeButtons = [];

  const onChangeThemeHandler = (newGameTheme) => {
    setGridTheme(newGameTheme);
  };

  const onChangeNumOfPlayersHandler = (newNumOfPlayers) => {
    setNumOfPlayers(newNumOfPlayers);
  };

  const onChangeGridSizeHandler = (newGridSize) => {
    setGridSize(newGridSize);
  };

  const onNewGameHandler = () => {
    dispatch(toggleModalVisibility());
    dispatch(setSettings({ gridSize, numOfPlayers, gridTheme }));
  };

  const generateThemeButtons = () => {
    for (const key in GAME_THEMES) {
      themeButtons.push(
        <Button
          onClick={onChangeThemeHandler.bind(null, GAME_THEMES[key])}
          key={key}
          type={`menu-selection${
            GAME_THEMES[key] === gridTheme ? '-active' : ''
          }`}
        >
          {firstCapitalLetter(GAME_THEMES[key])}
        </Button>
      );
    }
  };

  const generateNumOfPlayersButtons = () => {
    for (let i = 0; i < MAX_NUM_OF_PLAYERS; i++) {
      numOfPlayersButtons.push(
        <Button
          onClick={onChangeNumOfPlayersHandler.bind(null, i + 1)}
          key={i}
          type={`menu-selection${i + 1 === numOfPlayers ? '-active' : ''}`}
        >
          {i + 1}
        </Button>
      );
    }
  };

  const generateGridSizeButtons = () => {
    for (const key in GAME_GRID_SIZES) {
      gridSizeButtons.push(
        <Button
          onClick={onChangeGridSizeHandler.bind(null, GAME_GRID_SIZES[key])}
          key={key}
          type={`menu-selection${
            GAME_GRID_SIZES[key] === gridSize ? '-active' : ''
          }`}
        >
          {key}
        </Button>
      );
    }
  };

  generateThemeButtons();
  generateNumOfPlayersButtons();
  generateGridSizeButtons();

  return (
    <div className='game-menu'>
      <h3>Select Theme</h3>
      <div className='game-menu-buttons'>{themeButtons}</div>
      <h3>Numbers of Players</h3>
      <div className='game-menu-buttons'>{numOfPlayersButtons}</div>
      <h3>Grid Size</h3>
      <div className='game-menu-buttons'>{gridSizeButtons}</div>
      <Button onClick={onNewGameHandler} type='menu-start'>
        Start Game
      </Button>
    </div>
  );
};

export default GameMenu;
