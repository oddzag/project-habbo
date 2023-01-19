import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
  };

export const authState = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authSet: (state, { payload }) => {
            state.isAuthenticated = payload;
        },
    },
});

export const { authSet } = authState.actions;
export default authState.reducer;