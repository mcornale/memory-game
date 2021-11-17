import GameButton from './GameButton';
import { useSelector } from 'react-redux';

const GameGrid = () => {
  const gridSize = useSelector((state) => state.gameSettings.gridSize);
  const gridElements = [];

  console.log(gridSize);

  for (let i = 0; i < gridSize; i++) gridElements.push(<GameButton key={i} />);

  return (
    <div className={`game-grid game-grid-${gridSize === 16 ? '4x4' : '6x6'}`}>
      {gridElements}
    </div>
  );
};

export default GameGrid;
