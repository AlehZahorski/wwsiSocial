import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let PostData = [
    { id: 0, message: 'Tomorrow i have work on google', LikesCount:41},
    { id: 1, message: 'Yesterday i started learning React', LikesCount:45}
  ]

    return (

        <div className={style.MyPosts}>

            <textarea className={style.textarea}></textarea>
            <button className={style.AddBut}>Add post</button>
            <button className={style.RemoveBut}>Remove</button>


            <div className={style.posts}>
                <Post message={PostData[0].message} LikesCount={PostData[0].LikesCount}/>
                <Post message={PostData[1].message} LikesCount={PostData[1].LikesCount}/>

            </div>


        </div>

    );
}

export default MyPosts;
