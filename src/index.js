import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Draggable from 'react-draggable';

import './css/style.css';
import './css/img.css';

import Main from './Main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Router>
      <Main />
    </Router>
  </>
);
