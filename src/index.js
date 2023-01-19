import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './store/store.js';
import { Provider } from 'react-redux';

import './css/style.css';
import './css/img.css';

import Main from './Main.js';

//import organization
//
//core react components
//styled components
//router
//redux

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>

  <Provider store={store}>
    <Main />
  </Provider>
  </>
);
