import {rerenderFullApp} from './rerender.js';


let state = {
  ProfilePage: {
   posts: [
  { message: 'Tomorrow i have work on google', LikesCount:41},
  { message: 'Yesterday i started learning React', LikesCount:45}
]
},
   DialogsPage: {
   dialogs: [
  { id: 1, name: 'Andzrej'},
  { id: 2, name: 'Grzegorz'},
  { id: 3, name: 'Swetlana'},
  { id: 4, name: 'Dmitrij'},
  { id: 5, name: 'Konstantin'}
],
   messages:  [
  { id: 1, message: 'Hi. whatsup????'},
  { id: 2, message: 'Hello. How are you?'},
  { id: 3, message: 'elo elo elo!'},
  { id: 4, message: 'Эй, где мои бабки.. чувак?!!'},
  { id: 5, message: 'Привет!'}
]
}
}

export let addPost = (postMessage) => {
  let NewPost ={
    id: 5,
    message: postMessage,
    LikesCount: 0
  };
  state.ProfilePage.posts.push(NewPost);
  rerenderFullApp(state);
}

export default state;
