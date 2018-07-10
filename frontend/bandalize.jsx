import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootReducer from './reducers/root_reducer';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Bandalize</h1>, root);
});
