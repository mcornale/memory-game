import GameMenu from './GameMenu';
import Logo from './Logo';

const GameMenuContainer = () => {
  return (
    <div className='modal-card'>
      <Logo color='#fcfcfc' />
      <GameMenu />
    </div>
  );
};

export default GameMenuContainer;
