import styles from '../styles/GameEndInfo.module.css';

import GameInfoContainer from './GameInfoContainer';
import RestartGameButton from './RestartGameButton';
import StartNewGameButton from './StartNewGameButton';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuSettigsVisibility,
} from '../store/modalsSlice';
import { useDispatch } from 'react-redux';

const GameEndInfo = () => {
  const dispatch = useDispatch();

  const startNewGameHandler = () => {
    dispatch(toggleModalGameEndVisibility());
    dispatch(toggleModalMenuSettigsVisibility());
  };

  return (
    <div className={styles['game-end-info']}>
      <GameInfoContainer layout='vertical' gameEnd />
      <div className={styles['game-end-info__buttons']}>
        <RestartGameButton type='primary'>Restart</RestartGameButton>
        <StartNewGameButton
          onStartNewGame={startNewGameHandler}
          type='secondary'
        >
          Setup New Game
        </StartNewGameButton>
      </div>
    </div>
  );
};

export default GameEndInfo;
