import { useDispatch } from 'react-redux';
import { toggleModalVisibility } from '../store/modalMenuSlice';
import Button from './Button';
import { restartGame, startNewGame } from '../store/gameSlice';

const HeaderButtons = () => {
  const dispatch = useDispatch();

  const onNewGameHandler = () => {
    onGameRestart();
    dispatch(toggleModalVisibility());
  };

  const onGameRestart = () => {
    dispatch(restartGame());
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
