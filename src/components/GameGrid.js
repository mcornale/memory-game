import GameButton from './GameButton';
import { useSelector } from 'react-redux';

const GameGrid = () => {
  const gridSize = useSelector((state) => state.gameSettings.gridSize);
  const gridElements = [];

  const gridDifferentElements = gridSize / 2;

  for (let i = 0; i < gridDifferentElements; i++) {
    let randomPosition = 0;
    let countInserted = 0;

    do {
      randomPosition = Math.ceil(Math.random() * gridSize);
      if (gridElements[randomPosition] === undefined) {
        gridElements[randomPosition] = (
          <GameButton key={randomPosition}>{i + 1}</GameButton>
        );
        countInserted++;
      }
    } while (countInserted < 2);

    countInserted = 0;
    console.log(gridElements);
  }

  return (
    <div className={`game-grid game-grid-${gridSize === 16 ? '4x4' : '6x6'}`}>
      {gridElements}
    </div>
  );
};

export default GameGrid;
