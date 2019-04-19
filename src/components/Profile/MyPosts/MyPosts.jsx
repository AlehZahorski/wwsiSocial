import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


  let PostsElements = props.posts.map( (posts) => {
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
