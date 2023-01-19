import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    consoleOpen: true,
    buttonActive: 'myInfo',
};

export const consoleState = createSlice({
    name: 'console',
    initialState,
    reducers: {
        consoleClose: (state, { payload }) => {
            state.consoleOpen = payload;
        },
        buttonSet: (state, { payload }) => {
            state.buttonActive = payload;
        },
    },
});

export const { consoleClose, buttonSet } = consoleState.actions;
export default consoleState.reducer;