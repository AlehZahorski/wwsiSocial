const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
  _state: {
    ProfilePage: {
      posts: [
        { message: 'Tomorrow i have work on google', LikesCount:41},
        { message: 'Yesterday i started learning React', LikesCount:45}
      ],
      NewPostText: 'Enter your message..'
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
  },
  getState(){ //функция отдающая приватный метод стейт
    return this._state;
  },
  rerenderFullApp(){
    console.log('Hello, we have changes in state!');
  },
  _callSubscriber(){
    console.log('hello');
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  _addPost(){
    let newPost ={
      id: 5,
      message: this._state.ProfilePage.NewPostText,
      LikesCount: 0
    };
    this._state.ProfilePage.posts.push(newPost);
    this._state.ProfilePage.NewPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(action){
    this._state.ProfilePage.NewPostText = action.newText;
    this._callSubscriber(this._state);
  },
  dispatch(action){
    if (action.type === 'ADD-POST') {
      this._addPost();
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action);
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
     type: UPDATE_NEW_POST_TEXT, newText: text
  }
}


window.store = store;
export default store;
//store - oop
