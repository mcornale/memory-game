import styles from '../styles/GameGrid.module.css';

import GameButton from './GameButton';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleClickGameElement,
  hideGameElementsVisibility,
  changePlayerTurn,
  setGameFinished,
  resetLastTwoMoves,
  disableElementsActiveState,
  updatePairs,
} from '../store/gameSlice';
import { toggleModalGameEndVisibility } from '../store/modalsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GAME_GRID_SIZES, GAME_THEMES, ICONS_ARR } from '../constants';

const GameGrid = () => {
  const gridSize = useSelector((state) => state.game.gridSize);
  const gridTheme = useSelector((state) => state.game.gridTheme);
  const gameElements = useSelector((state) => state.game.gameElements);
  const lastTwoMoves = useSelector((state) => state.game.lastTwoMoves);
  const numOfPlayers = useSelector((state) => state.game.numOfPlayers);
  const dispatch = useDispatch();

  const canPlay = lastTwoMoves.length !== 2;

  useEffect(() => {
    let timeout;
    if (!canPlay) {
      timeout = setTimeout(() => {
        if (lastTwoMoves[0].value !== lastTwoMoves[1].value) {
          dispatch(
            hideGameElementsVisibility([lastTwoMoves[0], lastTwoMoves[1]])
          );
          dispatch(
            disableElementsActiveState([lastTwoMoves[0], lastTwoMoves[1]])
          );
          dispatch(resetLastTwoMoves());
          if (numOfPlayers > 1) dispatch(changePlayerTurn());
        } else {
          dispatch(
            disableElementsActiveState([lastTwoMoves[0], lastTwoMoves[1]])
          );
          dispatch(resetLastTwoMoves());
          dispatch(updatePairs());
        }

        if (
          gameElements.length > 0 &&
          gameElements.every((gameElement) => gameElement.isVisible)
        ) {
          dispatch(setGameFinished());
          dispatch(toggleModalGameEndVisibility());
        }
      }, 1000);
    }

    return () => {
      if (!canPlay && timeout) {
        clearTimeout(timeout);
      }
    };
  }, [gameElements, lastTwoMoves, numOfPlayers, canPlay, dispatch]);

  const onMoveMadeHandler = useCallback(
    (gameElement) => {
      if (!canPlay) return;
      dispatch(handleClickGameElement(gameElement));
    },
    [dispatch, canPlay]
  );

  const generateGridElements = useMemo(() => {
    const gridElements = [];

    gameElements.forEach((gameElement, index) => {
      gridElements.push(
        <GameButton
          canPlay={canPlay}
          isVisible={gameElement.isVisible}
          isActive={gameElement.isActive}
          onMoveMade={onMoveMadeHandler.bind(null, {
            value: gameElement.value,
            index,
          })}
          key={index}
        >
          {gridTheme === GAME_THEMES.NUMBERS ? (
            gameElement.value
          ) : (
            <FontAwesomeIcon icon={ICONS_ARR[gameElement.value - 1]} />
          )}
        </GameButton>
      );
    });

    return gridElements;
  }, [gameElements, gridTheme, onMoveMadeHandler, canPlay]);

  return (
    <div
      className={`${styles['game-grid']} ${
        styles[
          `game-grid--${gridSize === GAME_GRID_SIZES['4x4'] ? '4x4' : '6x6'}`
        ]
      }`}
    >
      {generateGridElements}
    </div>
  );
};

export default GameGrid;
