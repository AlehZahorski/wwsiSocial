import React from 'react';
import ReactDOM from 'react-dom';
import Route from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



  let posts = [
    { message: 'Tomorrow i have work on google', LikesCount:41},
    { message: 'Yesterday i started learning React', LikesCount:45}
  ]
  let dialogs = [
    { id: 1, name: 'Andzrej'},
    { id: 2, name: 'Grzegorz'},
    { id: 3, name: 'Swetlana'},
    { id: 4, name: 'Dmitrij'},
    { id: 5, name: 'Konstantin'}
  ]
  let messages =  [
    { id: 1, message: 'Hi. whatsup????'},
    { id: 2, message: 'Hello. How are you?'},
    { id: 3, message: 'Siemasz co tam?'},
    { id: 4, message: 'Wiez nie pierdol'},
    { id: 5, message: 'GTFO! man! GTFO!!!'}
  ]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
