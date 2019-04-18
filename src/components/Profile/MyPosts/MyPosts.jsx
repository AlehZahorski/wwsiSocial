import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let PostData = [
    { id: 0, message: 'Tomorrow i have work on google', LikesCount:41},
    { id: 1, message: 'Yesterday i started learning React', LikesCount:45}
  ]
  let PostsElements = PostData.map( (posts) => {
    return (
        <Post message={posts.message} LikesCount={posts.LikesCount}/>
    )
  })


    return (

        <div className={style.MyPosts}>

            <textarea className={style.textarea}></textarea>
            <button className={style.AddBut}>Add post</button>
            <button className={style.RemoveBut}>Remove</button>

            <div className={style.posts}>
            {PostsElements}
            </div>


        </div>

    );
}

export default MyPosts;
