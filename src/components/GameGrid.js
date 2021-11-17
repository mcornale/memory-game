import GameButton from './GameButton';

const GameGrid = () => {
  const gridSize = 4 * 4;
  const gridElements = [];

  for (let i = 0; i < gridSize; i++) gridElements.push(<GameButton key={i} />);

  return (
    <div className={`game-grid game-grid-${gridSize === 16 ? '4x4' : '6x6'}`}>
      {gridElements}
    </div>
  );
};

export default GameGrid;
