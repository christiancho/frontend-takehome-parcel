import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function loadApplication() {
  const entryDOM = document.querySelector('#root');
  ReactDOM.render(<App />, entryDOM);
}

document.addEventListener('DOMContentLoaded', loadApplication);
