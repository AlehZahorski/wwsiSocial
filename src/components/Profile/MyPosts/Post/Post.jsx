import React, { Component } from 'react';
import s from './Post.css';
import avatar1 from '../../../images/avatar1.jpg';


const Post = (props) => {


  return (

    <div className="item">
    <img src={avatar1}/>
    {props.message}
    <div>
    <span>Like </span>
    <span>Dislike</span>
    </div>
    </div>

  );
}

export default Post;
