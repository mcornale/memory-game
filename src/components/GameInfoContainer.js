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
  let gameEndTitle = '';
  let gameEndSubtitle = '';

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

      if (props.gameEnd) {
        gameEndTitle = 'You did it!';
        gameEndSubtitle = "Game over! Here's how you got on";
      }
    } else {
      for (let i = 0; i < numOfPlayers; i++) {
        gameInfoElements.push(
          <GameInfo
            {...(!props.gameEnd ? { isActive: activePlayerIndex === i } : {})}
            key={i}
            {...(props.gameEnd ? { showPairsString: true } : {})}
            value={props.gameEnd ? pairs[i] : moves[i]}
            isWinner={props.gameEnd && pairs[i] === Math.max(...pairs)}
          >{`Player ${i + 1}`}</GameInfo>
        );
      }

      if (props.gameEnd) {
        gameInfoElements.sort((a, b) => b.props.value - a.props.value);

        const playerToWin = gameInfoElements.filter(
          (gameInfoElement) => gameInfoElement.props.isWinner
        );

        if (playerToWin.length > 1) gameEndTitle = "It's a tie!";
        else gameEndTitle = `${playerToWin[0].props.children} Wins!`;

        gameEndSubtitle = 'Game over! Here are the results';
      }
    }
  };

  generateGameInfos();

  return (
    <>
      {props.gameEnd && (
        <div>
          <h1>{gameEndTitle}</h1>
          <p>{gameEndSubtitle}</p>
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
