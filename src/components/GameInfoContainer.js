import styles from '../styles/GameInfoContainer.module.css';

import GameInfo from './GameInfo';
import { useSelector } from 'react-redux';

const GameInfoContainer = (props) => {
  const minutesElapsed = useSelector((state) => state.game.minutesElapsed);
  const secondsElapsed = useSelector((state) => state.game.secondsElapsed);
  const moves = useSelector((state) => state.game.moves);
  const numOfPlayers = useSelector((state) => state.game.numOfPlayers);
  const activePlayerIndex = useSelector(
    (state) => state.game.activePlayerIndex
  );
  const gameInfoElements = [];

  const generateGameInfos = () => {
    if (numOfPlayers === 1) {
      gameInfoElements.push(
        <GameInfo
          key={1}
          value={`${minutesElapsed}:${secondsElapsed
            .toString()
            .padStart(2, '0')}`}
        >{`Time ${props.gameEnd ? 'Elapsed' : ''}`}</GameInfo>
      );
      gameInfoElements.push(
        <GameInfo
          key={2}
          value={moves[activePlayerIndex]}
          {...(props.gameEnd ? { showMovesString: true } : {})}
        >{`Moves ${props.gameEnd ? 'Taken' : ''}`}</GameInfo>
      );
    } else {
      for (let i = 0; i < numOfPlayers; i++) {
        gameInfoElements.push(
          <GameInfo
            isActive={activePlayerIndex === i}
            key={i}
            value={moves[i]}
          >{`Player ${i + 1}`}</GameInfo>
        );
      }
    }
  };

  generateGameInfos();

  return (
    <div
      className={`${styles['game-info-container']} ${
        styles[`game-info-container--${props.layout}`]
      }`}
    >
      {gameInfoElements}
    </div>
  );
};

export default GameInfoContainer;
