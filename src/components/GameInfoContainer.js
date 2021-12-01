import styles from '../styles/GameInfoContainer.module.css';

import GameInfo from './GameInfo';
import { useSelector } from 'react-redux';
import { useMemo, useRef } from 'react';

const GameInfoContainer = (props) => {
  const minutesElapsed = useSelector((state) => state.game.minutesElapsed);
  const secondsElapsed = useSelector((state) => state.game.secondsElapsed);
  const moves = useSelector((state) => state.game.moves);
  const pairs = useSelector((state) => state.game.pairs);
  const numOfPlayers = useSelector((state) => state.game.numOfPlayers);
  const activePlayerIndex = useSelector(
    (state) => state.game.activePlayerIndex
  );
  let gameEndTitle = useRef('');
  let gameEndSubtitle = useRef('');

  const generateGameInfos = useMemo(() => {
    const gameInfoElements = [];

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
        gameEndTitle.current = 'You did it!';
        gameEndSubtitle.current = "Game over! Here's how you got on";
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
            playerShortText={`P${i + 1}`}
          >{`Player ${i + 1}`}</GameInfo>
        );
      }

      if (props.gameEnd) {
        gameInfoElements.sort((a, b) => b.props.value - a.props.value);

        const playerToWin = gameInfoElements.filter(
          (gameInfoElement) => gameInfoElement.props.isWinner
        );

        if (playerToWin.length > 1) gameEndTitle.current = "It's a tie!";
        else gameEndTitle.current = `${playerToWin[0].props.children} Wins!`;

        gameEndSubtitle.current = 'Game over! Here are the results';
      }
    }

    return gameInfoElements;
  }, [
    activePlayerIndex,
    moves,
    numOfPlayers,
    pairs,
    props.gameEnd,
    minutesElapsed,
    secondsElapsed,
  ]);

  return (
    <>
      {props.gameEnd && (
        <div>
          <h1>{gameEndTitle.current}</h1>
          <p>{gameEndSubtitle.current}</p>
        </div>
      )}

      <div
        className={`${styles['game-info-container']} ${
          styles[`game-info-container--${props.layout}`]
        }`}
      >
        {generateGameInfos}
      </div>
    </>
  );
};

export default GameInfoContainer;
