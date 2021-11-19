import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  minutesElapsed: 0,
  secondsElapsed: 0,
  moves: 0,
};

const gameSinglePlayerSlice = createSlice({
  name: 'gameSinglePlayer',
  initialState,
  reducers: {
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
    updateMoves: (state) => {
      state.moves += 1;
    },
  },
});

export const { restartGame, updateTimer, updateMoves, addToLastTwoMovesIndex } =
  gameSinglePlayerSlice.actions;
export default gameSinglePlayerSlice.reducer;
