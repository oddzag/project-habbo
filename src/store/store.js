import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authenticated.js';
import loginReducer from './login.js';
import registerReducer from './register.js';
import userReducer from './user.js';

import noticeReducer from './notice.js';

import idReducer from './id.js';
import consoleReducer from './console.js';

import stickyReducer from './sticky.js';

import archiveReducer from './archive.js';

export const store = configureStore({
  reducer: {
    //hotel
    auth: authReducer,
    login: loginReducer,
    register: registerReducer,
    user: userReducer,

      //Messages
      notice: noticeReducer,

      //User
      id: idReducer,
      console: consoleReducer,

      //misc
      sticky: stickyReducer,

    //archive
    archive: archiveReducer,
  },
});