import { createSlice } from '@reduxjs/toolkit';
import { GAME_GRID_SIZES, GAME_THEMES } from '../constants';

const initialState = {
  theme: GAME_THEMES.NUMBERS,
  numOfPlayers: 1,
  gridSize: GAME_GRID_SIZES['4x4'],
};

const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setNumOfPlayers: (state, action) => {
      state.numOfPlayers = action.payload;
    },
    setGridSize: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme, setNumOfPlayers, setGridSize } =
  gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;