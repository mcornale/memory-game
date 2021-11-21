import Logo from './Logo';
import { useDispatch } from 'react-redux';
import { toggleModalVisibility } from '../store/modalMenuSlice';
import Button from './Button';
import { startNewGame } from '../store/gameSlice';
import styles from '../styles/Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const onNewGameHandler = () => {
    dispatch(toggleModalVisibility());
  };

  const onGameRestart = () => {
    dispatch(startNewGame());
  };

  return (
    <header className={`${styles.header}`}>
      <Logo color='#152938' />
      <div className={`${styles.header__buttons}`}>
        <Button onClick={onGameRestart} type='primary'>
          Restart
        </Button>
        <Button onClick={onNewGameHandler} type='secondary'>
          New Game
        </Button>
      </div>
    </header>
  );
};

export default Header;
