import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loginOpen: true,
};

export const loginState = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginClose: (state, { payload }) => {
            state.loginOpen = payload;
        },
    },
});

export const { loginClose } = loginState.actions;
export default loginState.reducer;