import styles from '../styles/GameSettingsMenu.module.css';

import { MAX_NUM_OF_PLAYERS, GAME_GRID_SIZES, GAME_THEMES } from '../constants';
import Button from './Button';
import StartNewGameButton from './StartNewGameButton';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import firstCapitalLetter from '../helpers/firstCapitalLetter';

const GameSettingsMenu = () => {
  const [gridSize, setGridSize] = useState(
    useSelector((state) => state.game.gridSize)
  );
  const [numOfPlayers, setNumOfPlayers] = useState(
    useSelector((state) => state.game.numOfPlayers)
  );
  const [gridTheme, setGridTheme] = useState(
    useSelector((state) => state.game.gridTheme)
  );

  const onChangeThemeHandler = (newGameTheme) => {
    setGridTheme(newGameTheme);
  };

  const onChangeNumOfPlayersHandler = (newNumOfPlayers) => {
    setNumOfPlayers(newNumOfPlayers);
  };

  const onChangeGridSizeHandler = (newGridSize) => {
    setGridSize(newGridSize);
  };

  const generateThemeButtons = useMemo(() => {
    const themeButtons = [];

    for (const key in GAME_THEMES) {
      themeButtons.push(
        <Button
          onClick={onChangeThemeHandler.bind(null, GAME_THEMES[key])}
          key={key}
          type={`menu-selection${
            GAME_THEMES[key] === gridTheme ? '--active' : ''
          }`}
        >
          {firstCapitalLetter(GAME_THEMES[key])}
        </Button>
      );
    }

    return themeButtons;
  }, [gridTheme]);

  const generateNumOfPlayersButtons = useMemo(() => {
    const numOfPlayersButtons = [];

    for (let i = 0; i < MAX_NUM_OF_PLAYERS; i++) {
      numOfPlayersButtons.push(
        <Button
          onClick={onChangeNumOfPlayersHandler.bind(null, i + 1)}
          key={i}
          type={`menu-selection${i + 1 === numOfPlayers ? '--active' : ''}`}
        >
          {i + 1}
        </Button>
      );
    }

    return numOfPlayersButtons;
  }, [numOfPlayers]);

  const generateGridSizeButtons = useMemo(() => {
    const gridSizeButtons = [];

    for (const key in GAME_GRID_SIZES) {
      gridSizeButtons.push(
        <Button
          onClick={onChangeGridSizeHandler.bind(null, GAME_GRID_SIZES[key])}
          key={key}
          type={`menu-selection${
            GAME_GRID_SIZES[key] === gridSize ? '--active' : ''
          }`}
        >
          {key}
        </Button>
      );
    }
    return gridSizeButtons;
  }, [gridSize]);

  return (
    <div className={styles['game-settings-menu']}>
      <h3 className={styles['game-settings-menu__title']}>Select Theme</h3>
      <div className={styles['game-settings-menu__buttons']}>
        {generateThemeButtons}
      </div>
      <h3 className={styles['game-settings-menu__title']}>
        Numbers of Players
      </h3>
      <div className={styles['game-settings-menu__buttons']}>
        {generateNumOfPlayersButtons}
      </div>
      <h3 className={styles['game-settings-menu__title']}>Grid Size</h3>
      <div className={styles['game-settings-menu__buttons']}>
        {generateGridSizeButtons}
      </div>
      <StartNewGameButton
        settingsChoice={{ gridSize, numOfPlayers, gridTheme }}
        type='menu-start'
      >
        Start Game
      </StartNewGameButton>
    </div>
  );
};

export default GameSettingsMenu;
