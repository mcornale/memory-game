import { createSlice } from '@reduxjs/toolkit';
import { GAME_GRID_SIZES, GAME_THEMES } from '../constants';

const initialState = {
  gameElements: [],
  minutesElapsed: 0,
  secondsElapsed: 0,
  moves: [],
  pairs: [],
  lastTwoMoves: [],
  gameStarted: 0,
  gridTheme: GAME_THEMES.NUMBERS,
  numOfPlayers: 1,
  activePlayerIndex: 0,
  gridSize: GAME_GRID_SIZES['4x4'],
  isGameFinished: false,
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGameSettings: (state, action) => {
      state.gridSize = action.payload.gridSize;
      state.gridTheme = action.payload.gridTheme;
      state.numOfPlayers = action.payload.numOfPlayers;
    },
    generateGameElements: (state) => {
      const gridDifferentElements = state.gridSize / 2;
      const newGameElements = [];

      for (let i = 0; i < gridDifferentElements; i++) {
        let randomPosition = 0;
        let countInserted = 0;

        do {
          randomPosition = Math.floor(Math.random() * state.gridSize);
          if (newGameElements[randomPosition] === undefined) {
            newGameElements[randomPosition] = {
              value: i + 1,
              isVisible: false,
              isActive: false,
            };

            countInserted++;
          }
        } while (countInserted < 2);

        countInserted = 0;
      }

      state.gameElements = newGameElements;
    },
    updateTimer: (state) => {
      if (state.secondsElapsed + 1 === 60) {
        state.minutesElapsed += 1;
        state.secondsElapsed = 0;
      } else {
        state.secondsElapsed += 1;
      }
    },
    handleClickGameElement: (state, action) => {
      const { payload: gameElement } = action;
      state.gameElements[gameElement.index].isVisible = true;
      state.gameElements[gameElement.index].isActive = true;

      state.lastTwoMoves.push(gameElement);
    },
    hideGameElementsVisibility: (state, action) => {
      const { payload: gameElementsToHide } = action;
      gameElementsToHide.forEach((gameElementToHide) => {
        state.gameElements[gameElementToHide.index].isVisible = false;
      });
    },
    disableElementsActiveState: (state, action) => {
      const { payload: gameElementsToChangeActiveState } = action;
      gameElementsToChangeActiveState.forEach((gameElementToChangeActive) => {
        state.gameElements[gameElementToChangeActive.index].isActive = false;
      });
    },
    startNewGame: (state) => {
      state.isGameFinished = false;
      state.minutesElapsed = 0;
      state.secondsElapsed = 0;
      state.gameElements = [];
      state.lastTwoMoves = [];
      state.moves = [];
      state.pairs = [];
      state.activePlayerIndex = 0;

      state.gameStarted += 1;
      for (let i = 0; i < state.numOfPlayers; i++) {
        state.moves[i] = state.pairs[i] = 0;
      }
    },
    changePlayerTurn: (state) => {
      if (state.activePlayerIndex + 1 === state.numOfPlayers)
        state.activePlayerIndex = 0;
      else state.activePlayerIndex += 1;
    },
    setGameFinished: (state) => {
      state.isGameFinished = true;
    },
    resetLastTwoMoves: (state) => {
      state.moves[state.activePlayerIndex] += 1;
      state.lastTwoMoves = [];
    },
    updatePairs: (state) => {
      state.pairs[state.activePlayerIndex] += 1;
    },
  },
});

export const {
  setGameSettings,
  generateGameElements,
  restartGame,
  updateTimer,
  handleClickGameElement,
  hideGameElementsVisibility,
  disableElementsActiveState,
  startNewGame,
  changePlayerTurn,
  setGameFinished,
  resetLastTwoMoves,
  updatePairs,
} = gameSlice.actions;
export default gameSlice.reducer;
