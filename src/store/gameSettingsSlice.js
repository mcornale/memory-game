import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'numbers',
  numOfPlayers: 1,
  gridSize: 16,
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
