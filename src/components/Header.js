import styles from '../styles/Header.module.css';

import Logo from './Logo';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { toggleModalVisibility } from '../store/modalMenuSlice';
import { startNewGame } from '../store/gameSlice';

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
