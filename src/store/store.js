import { configureStore } from '@reduxjs/toolkit';
import gameReducers from './gameSlice';
import modalsReducers from './modalsSlice';

export const store = configureStore({
  reducer: {
    game: gameReducers,
    modals: modalsReducers,
  },
});
