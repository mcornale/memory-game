import styles from '../styles/Header.module.css';

import Logo from './Logo';
import RestartGameButton from './RestartGameButton';
import StartNewGameButton from './StartNewGameButton';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Logo color='#152938' />
      <div className={`${styles.header__buttons}`}>
        <RestartGameButton type='primary'>Restart</RestartGameButton>
        <StartNewGameButton type='secondary'>New Game</StartNewGameButton>
      </div>
    </header>
  );
};

export default Header;
