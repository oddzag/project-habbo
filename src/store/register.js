import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    termsChecked: false,
    nextLink: "",
  };

export const registerState = createSlice({
    name: 'registerState',
    initialState,
    reducers: {
        termsCheck: (state, { payload }) => { state.termsChecked = payload; },
        linkSet: (state, { payload }) => {state.nextLink = payload; },
    },
});

export const { termsCheck, linkSet } = registerState.actions;
export default registerState.reducer;