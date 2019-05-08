import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost, updateNewPostText,  NewPostElement, PostsElements} from '../../../Redux/state';



const MyPosts = (props) => {

  let PostsElements = props.posts.map( (posts) => {
    return (
      <Post message={posts.message} LikesCount={posts.LikesCount}/>
    )
  })

  let newPostElement = React.createRef();



  let addPosts = () => {
    props.dispatch({type: 'ADD-POST'});
  }


    let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      props.dispatch(action);
    }

  return (
    <div className={style.MyPosts}>
    <textarea onChange={onPostChange} ref={newPostElement}
     value={props.NewPostText} className={style.textarea}/>
    <button onClick={addPosts} className={style.AddBut}>Add post</button>
    <div className={style.posts}>
    {PostsElements}
    </div>
    </div>

  );
}

export default MyPosts;
