import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost} from '../../../Redux/state';



const MyPosts = (props) => {


  let PostsElements = props.posts.map( (posts) => {
    return (
      <Post message={posts.message} LikesCount={posts.LikesCount}/>
    )
  })

  let NewPostElement = React.createRef();



  let addPosts = () => {
    let text = NewPostElement.current.value;
    alert('Your post is added: ' + text)
    function addPost() {
  }
  props.addPost(text);
  NewPostElement.current.value = '';
  }

  return (
    <div className={style.MyPosts}>
    <textarea ref={NewPostElement} className={style.textarea}></textarea>
    <button onClick={addPosts} className={style.AddBut}>Add post</button>
    <div className={style.posts}>
    {PostsElements}
    </div>
    </div>

  );
}

export default MyPosts;
