import React from 'react';
import ReactDOM from 'react-dom';
import Route from 'react-router-dom';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
import {addPost, updateNewPostText, state} from './state.js';
import {BrowserRouter} from 'react-router-dom';




export let rerenderFullApp = (state) => {
ReactDOM.render(
  <BrowserRouter>
  <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </BrowserRouter>, document.getElementById('root'));
}
