import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalMenuSettingsVisible: true,
  isModalGameEndVisible: false,
  isModalMenuVisible: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleModalMenuSettigsVisibility: (state) => {
      state.isModalMenuSettingsVisible = !state.isModalMenuSettingsVisible;
    },
    toggleModalGameEndVisibility: (state) => {
      state.isModalGameEndVisible = !state.isModalGameEndVisible;
    },
    toggleModalMenuVisibility: (state) => {
      state.isModalMenuVisible = !state.isModalMenuVisible;
    },
  },
});

export const {
  toggleModalMenuSettigsVisibility,
  toggleModalGameEndVisibility,
  toggleModalMenuVisibility,
} = modalsSlice.actions;
export default modalsSlice.reducer;
