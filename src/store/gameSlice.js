import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameElements: [],
  minutesElapsed: 0,
  secondsElapsed: 0,
  moves: 0,
  lastTwoMoves: [],
};

const gameSlice = createSlice({
  name: 'gameSinglePlayer',
  initialState,
  reducers: {
    generateGameElements: (state, action) => {
      const newGameElements = [];

      for (let i = 0; i < action.payload.gridDifferentElements; i++) {
        let randomPosition = 0;
        let countInserted = 0;

        do {
          randomPosition = Math.floor(Math.random() * action.payload.gridSize);
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
    restartGame: (state) => {
      state.minutesElapsed = 0;
      state.secondsElapsed = 0;
      state.moves = 0;
    },
    updateTimer: (state) => {
      if (state.secondsElapsed + 1 === 60) {
        state.minutesElapsed += 1;
        state.secondsElapsed = 0;
      } else {
        state.secondsElapsed += 1;
      }
    },
    updateLastTwoMoves: (state, action) => {
      if (state.lastTwoMoves.length === 2) {
        state.lastTwoMoves = [];
      }
      state.lastTwoMoves.push(action.payload);
    },
    handleClickGameElement: (state, action) => {
      if (state.lastTwoMoves.length === 2) state.moves += 1;

      const { payload: gameElement } = action;
      state.gameElements[gameElement.index].isVisible =
        !state.gameElements[gameElement.index].isVisible;
      state.gameElements[gameElement.index].isActive =
        !state.gameElements[gameElement.index].isActive;
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
  },
});

export const {
  generateGameElements,
  restartGame,
  updateTimer,
  updateLastTwoMoves,
  handleClickGameElement,
  hideGameElementsVisibility,
  disableElementsActiveState,
} = gameSlice.actions;
export default gameSlice.reducer;
