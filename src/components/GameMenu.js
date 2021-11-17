import Button from './Button';

const GameMenu = (props) => {
  return (
    <div className='game-menu'>
      <h3>Select Theme</h3>
      <div className='game-menu-buttons'>
        <Button type='menu-selection'>Numbers</Button>
        <Button type='menu-selection'>Icons</Button>
      </div>
      <h3>Numbers of Players</h3>
      <div className='game-menu-buttons'>
        <Button type='menu-selection'>1</Button>
        <Button type='menu-selection'>2</Button>
        <Button type='menu-selection'>3</Button>
        <Button type='menu-selection'>4</Button>
      </div>
      <h3>Grid Size</h3>
      <div className='game-menu-buttons'>
        <Button type='menu-selection'>4x4</Button>
        <Button type='menu-selection'>6x6</Button>
      </div>
      <Button onClick={props.onGameStart} type='menu-start'>
        Start Game
      </Button>
    </div>
  );
};

export default GameMenu;
