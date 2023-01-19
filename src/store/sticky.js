import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: true,
    bg: 'blue',
  };

export const stickyState = createSlice({
    name: 'sticky',
    initialState,
    reducers: {
        stickyClose: (state, { payload }) => {
            state.isOpen = payload;
        },
        stickyBG: (state, { payload }) => {
            state.bg = payload;
        }
    },
});

export const { stickyClose, stickyBG } = stickyState.actions;
export default stickyState.reducer;
