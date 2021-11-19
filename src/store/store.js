import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import modalMenuReducer from './modalMenuSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    modalMenu: modalMenuReducer,
  },
});
