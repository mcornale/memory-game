import { useDispatch } from 'react-redux';
import { toggleModalVisibility } from '../store/modalMenuSlice';
import Button from './Button';
import { startNewGame } from '../store/gameSlice';

const HeaderButtons = () => {
  const dispatch = useDispatch();

  const onNewGameHandler = () => {
    dispatch(toggleModalVisibility());
  };

  const onGameRestart = () => {
    dispatch(startNewGame());
  };

  return (
    <div className='header-buttons'>
      <Button onClick={onGameRestart} type='primary'>
        Restart
      </Button>
      <Button onClick={onNewGameHandler} type='secondary'>
        New Game
      </Button>
    </div>
  );
};

export default HeaderButtons;
