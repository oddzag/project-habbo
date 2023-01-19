import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    navFlags: {
        home: true,
        devnotes: false,
        comments: false
    }
}

export const archive = createSlice({ 
    name: 'archive',
    initialState,
    reducers: {
        navSet: (state, { payload }) => { 
            for (var key of Object.keys(state.navFlags)) {
                if (key == payload)
                    state.navFlags[key] = true;
                else
                    state.navFlags[key] = false;
            }
        },
    }

});

export const { navSet } = archive.actions;
export default archive.reducer;

/*
  So basically what's happening is the user is clicking the nav item, e.g <NavButton onClick={() => {dispatch(navSet("home"))}}>.
  here, "home" is the payload. In the navSet reducer, a 'for' loop starts to cycle through the navFlags object as many times as
  there are values in the object. It then compares 'key' (think index in an array, but for an object) to the payload. If the payload
  does not equal the key, it sets the flag for the payloads object value to false. This way it resets all flags to hide the content,
  and then looks for the clicked nav item, which it sets its flag to true, therefore showing the selected content.
*/