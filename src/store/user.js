import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gender: "m",

    //Imager
    genderSelected: true,
    spriteIndexes: {
      ha: 0,
      hr: 0,
      hd: 0,
      ch: 0,
      lg: 0,
      sh: 0,
    },
    
    genderSprites: {
      ha: [1001, 1010, 1002, 1003, 1004, 1006, 1007, 1008, 1009],
      hr: [100, /* 105 - does not display correctly,*/ 110, 115, 125, 135, 145, 155, 165, 170],
      hd: [180, 185, 190, 195, 200, 205, 206, 207],
      ch: [210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 266, 267],
      lg: [270, 275, 280, 281, 285],
      sh: [290, /* 295 - does not display correctly,*/ 300, 305]
    },

    maleSprites: {
      ha: [1001, 1010, 1002, 1003, 1004, 1006, 1007, 1008, 1009],
      hr: [100, /* 105 - does not display correctly,*/ 110, 115, 125, 135, 145, 155, 165, 170],
      hd: [180, 185, 190, 195, 200, 205, 206, 207],
      ch: [210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 266, 267],
      lg: [270, 275, 280, 281, 285],
      sh: [290, /* 295 - does not display correctly,*/ 300, 305]
    },

    femaleSprites: {
      ha: [1002, 1003, 1004, 1005, 1007, 1006, 1008, 1009],
      hr: [500, 505, 510, 515, 520, 530, 540, 545, 550, 555, 556, 575], 
      hd: [600, 605, 610, 615, 620, 625, 626, 627],
      ch: [630, 635, 640, 645, 650, 655, 660, 665, 667, 669, 670, 675, 680, 685, 690],
      lg: [695, 696, 700, 705, 710, 715],
      sh: [725, 730, 735, 740]
    },
  };

  export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
            genderSet: (state, { payload }) => {

              //Redundancy check, randomize sprites when gender is changed
              if (payload !== state.gender) {
                state.genderSelected = !state.genderSelected;
                state.gender = payload;
                state.spriteIndexes.ha = Math.floor(Math.random() * state.genderSprites.ha.length);
                state.spriteIndexes.hr = Math.floor(Math.random() * state.genderSprites.hr.length);
                state.spriteIndexes.hd = Math.floor(Math.random() * state.genderSprites.hd.length);
                state.spriteIndexes.ch = Math.floor(Math.random() * state.genderSprites.ch.length);
                state.spriteIndexes.lg = Math.floor(Math.random() * state.genderSprites.lg.length);
                state.spriteIndexes.sh = Math.floor(Math.random() * state.genderSprites.sh.length);
              }

              switch(payload) {
                case 'm':
                  state.genderSprites = state.maleSprites;
                  return;
                case 'f':
                  state.genderSprites = state.femaleSprites;
                  return;
              }
            },

            spriteSet: (state, { payload }) => {
              var arrLength = state.genderSprites[payload[1]].length;
              switch(payload[0]) {
                case 'next':
                  { (state.spriteIndexes[payload[1]] >= arrLength - 1) ? state.spriteIndexes[payload[1]] = 0 : state.spriteIndexes[payload[1]]++; };
                  break;

                case 'back':
                  { (state.spriteIndexes[payload[1]] === 0) ? state.spriteIndexes[payload[1]] = arrLength - 1 : state.spriteIndexes[payload[1]]--; };
                  break;
              }
            },
    }
});

export const { genderSet, spriteSet } = user.actions;
export default user.reducer;