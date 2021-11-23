import styles from '../styles/Header.module.css';
import OpenCloseMenuButton from './OpenCloseMenuButton';

import Logo from './Logo';
import RestartGameButton from './RestartGameButton';
import StartNewGameButton from './StartNewGameButton';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Logo color='#152938' />
      <div className={`${styles.header__buttons}`}>
        <OpenCloseMenuButton type='primary'>Menu</OpenCloseMenuButton>
        <RestartGameButton type='primary'>Restart</RestartGameButton>
        <StartNewGameButton type='secondary'>New Game</StartNewGameButton>
      </div>
    </header>
  );
};

export default Header;
