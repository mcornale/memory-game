import { configureStore } from '@reduxjs/toolkit';
import gameSettingsReducer from './gameSettingsSlice';

export const store = configureStore({
  reducer: {
    gameSettings: gameSettingsReducer,
  },
});
