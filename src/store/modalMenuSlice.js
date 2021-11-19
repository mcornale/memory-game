import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: true,
};

const modalMenuSlice = createSlice({
  name: 'modalMenu',
  initialState,
  reducers: {
    toggleModalVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleModalVisibility } = modalMenuSlice.actions;
export default modalMenuSlice.reducer;
