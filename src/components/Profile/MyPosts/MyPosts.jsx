import React, { Component } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {



  return (

    <div className={style.MyPosts}>

    <textarea className={style.textarea}></textarea>
    <button className={style.AddBut}>Add post</button>
    <button className={style.RemoveBut}>Remove</button>



    <div className={style.posts}>
    <Post message="Tomorrow i have work on google" LikesCount="45" />
    <Post message='Yesterday i started learning React' LikesCount="41" />

    </div>



    </div>

  );
}

export default MyPosts;
