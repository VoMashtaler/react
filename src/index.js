import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'

ReactDOM.render(
  <React.StrictMode>
    <App
      state={state}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


// let posts = [
//   { id: 1, message: 'Привіт. Як ти?', likesCount: 15},
//   { id: 2, message: 'Це мій перший пост', likesCount: 20},      
//   { id: 3, message: 'Тут якийсь пост', likesCount: 99},      
//   { id: 4, message: 'І тут теж', likesCount: 1}      
// ];

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
