import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idOpen: true,
  };

export const idState = createSlice({
    name: 'id',
    initialState,
    reducers: {
        idClose: (state, { payload }) => {
            state.idOpen = payload;
        },
    },
});

export const { idOpen, idClose } = idState.actions;
export default idState.reducer;