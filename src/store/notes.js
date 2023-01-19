import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notesOpen: true,
  };

export const notesState = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        notesClose: (state, { payload }) => {
            state.notesOpen = payload;
        },
    },
});

export const { notesClose } = notesState.actions;
export default notesState.reducer;
