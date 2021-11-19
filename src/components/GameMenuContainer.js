import GameMenu from './GameMenu';
import Logo from './Logo';

const GameMenuContainer = (props) => {
  return (
    <div className='game-menu-container'>
      <Logo color='#fcfcfc' />
      <GameMenu />
    </div>
  );
};

export default GameMenuContainer;
