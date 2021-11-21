import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalMenuSettingsVisible: true,
  isModalGameEndVisible: false,
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
  },
});

export const {
  toggleModalMenuSettigsVisibility,
  toggleModalGameEndVisibility,
} = modalsSlice.actions;
export default modalsSlice.reducer;
