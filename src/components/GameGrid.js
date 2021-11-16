import GameButton from './GameButton';

const GameGrid = () => {
  const gridSize = 4 * 4;
  const gridElements = [];

  for (let i = 0; i < gridSize; i++) gridElements.push(<GameButton />);

  return <div className='game-grid'>{gridElements}</div>;
};

export default GameGrid;
