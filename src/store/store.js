import { configureStore } from '@reduxjs/toolkit';
import gameSettingsReducer from './gameSettingsSlice';
import gameSinglePlayerReducer from './gameSinglePlayerSlice';

export const store = configureStore({
  reducer: {
    gameSettings: gameSettingsReducer,
    gameSinglePlayer: gameSinglePlayerReducer,
  },
});
