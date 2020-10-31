/**
 * General entry point for rendering JavaScript into the DOM.
 * 
 * Will produce the script source code from the base HTML
 * render template in the @public/index.html file as "root"
 * 
 * @author Robert A. Dekovich (dekovich@umich.edu)
 * @date 31 October 2020
 * @file index.js
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import '@css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
