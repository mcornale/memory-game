import GameButton from './GameButton';
import { useSelector } from 'react-redux';
import { GAME_GRID_SIZES, GAME_THEMES, ICONS_ARR } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameGrid = () => {
  const gridSize = useSelector((state) => state.gameSettings.gridSize);
  const gridTheme = useSelector((state) => state.gameSettings.gridTheme);
  const gridElements = [];
  const gridDifferentElements = gridSize / 2;

  const generateGridElements = () => {
    for (let i = 0; i < gridDifferentElements; i++) {
      let randomPosition = 0;
      let countInserted = 0;

      do {
        randomPosition = Math.ceil(Math.random() * gridSize);
        if (gridElements[randomPosition] === undefined) {
          gridElements[randomPosition] = (
            <GameButton key={randomPosition}>
              {gridTheme === GAME_THEMES.NUMBERS ? (
                i + 1
              ) : (
                <FontAwesomeIcon icon={ICONS_ARR[i]} />
              )}
            </GameButton>
          );
          countInserted++;
        }
      } while (countInserted < 2);

      countInserted = 0;
    }
  };

  generateGridElements();

  return (
    <div
      className={`game-grid game-grid-${
        gridSize === GAME_GRID_SIZES['4x4'] ? '4x4' : '6x6'
      }`}
    >
      {gridElements}
    </div>
  );
};

export default GameGrid;
