import { configureStore } from '@reduxjs/toolkit';
import gameSettingsReducer from './gameSettingsSlice';
import gameReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    gameSettings: gameSettingsReducer,
    game: gameReducer,
  },
});
