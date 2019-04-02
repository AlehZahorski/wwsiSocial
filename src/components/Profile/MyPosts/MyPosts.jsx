import React, { Component } from 'react';
import s from './MyPosts.css';
import Post from './Post/Post';
import avatar1 from '../../images/avatar1.jpg';
import avatar2 from '../../images/avatar2.jpeg';
import avatar3 from '../../images/avatar3.jpeg';
import avatar5 from '../../images/avatar5.jpeg';



const MyPosts = (props) => {



  return (

    <div>

    <textarea className="textarea"></textarea>
    <button className="AddBut">Add post</button>
    <button className="RemoveBut">Remove</button>



    <div className="posts">
    <Post message="Tomorrow i have work on google" LikesCount="45" />
    <Post message='Yesterday i started learning React' LikesCount="41" />

    </div>



    </div>

  );
}

export default MyPosts;
