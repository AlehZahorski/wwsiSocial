import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/state.js";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import state, {subscribe} from './Redux/state';



let rerenderFullApp = (state) => {
ReactDOM.render(
  <BrowserRouter>
  <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </BrowserRouter>, document.getElementById('root'));
}

rerenderFullApp(state);

subscribe(rerenderFullApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
