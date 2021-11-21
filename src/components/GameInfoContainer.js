import styles from '../styles/GameInfoContainer.module.css';

import GameInfo from './GameInfo';
import { useSelector } from 'react-redux';

const GameInfoContainer = (props) => {
  const minutesElapsed = useSelector((state) => state.game.minutesElapsed);
  const secondsElapsed = useSelector((state) => state.game.secondsElapsed);
  const moves = useSelector((state) => state.game.moves);
  const pairs = useSelector((state) => state.game.pairs);
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
            {...(!props.gameEnd ? { isActive: activePlayerIndex === i } : {})}
            key={i}
            {...(props.gameEnd ? { showPairsString: true } : {})}
            value={props.gameEnd ? pairs[i] : moves[i]}
            isWinner={
              pairs[i] === Math.max(...pairs) && Math.max(...pairs) !== 0
            }
          >{`Player ${i + 1}`}</GameInfo>
        );
      }

      if (props.gameEnd)
        gameInfoElements.sort((a, b) => b.props.value - a.props.value);
    }
  };

  generateGameInfos();

  return (
    <>
      {props.gameEnd && (
        <div>
          <h1>You did it!</h1>
          <p>Game Over! Here's how you got on...</p>
        </div>
      )}

      <div
        className={`${styles['game-info-container']} ${
          styles[`game-info-container--${props.layout}`]
        }`}
      >
        {gameInfoElements}
      </div>
    </>
  );
};

export default GameInfoContainer;
