import React, {Component} from 'react';
import avatar1 from '../../../images/avatar1.jpg';
import style from './Post.module.css';


const Post = (props) => {


    return (

        <div className={style.item}>
            <img src={avatar1}/>
            {props.message}
            <div>
                <span>♥ </span>
                {props.LikesCount}
            </div>
        </div>

    );
}

export default Post;
