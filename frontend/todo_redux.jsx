import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

let store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
  window.store = store;
});
