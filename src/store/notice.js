import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noticeOpen: false,
    heading: "",
    message: "",
  };

export const noticeState = createSlice({
    name: 'noticeState',
    initialState,
    reducers: {
        noticeSet: (state, { payload }) => {
            state.noticeOpen = payload;
        },
        noticeHeadingSet: (state, { payload }) => {
            state.heading = payload;
        },
        noticeMessageSet: (state, { payload }) => {
            state.message = payload;
        },
    },
});

//this has to be neated up, there's gotta be a cleaner standard. ill be back
export const { noticeOpen, noticeSet, noticeHeadingSet, noticeMessageSet } = noticeState.actions;
export default noticeState.reducer;