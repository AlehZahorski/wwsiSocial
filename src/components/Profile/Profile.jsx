 import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import main from '../images/main.jpeg';
import profile from '../images/profile.jpg';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import DropDown from '../Header/DropDown/DropDown.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {


  return (
    <div className="MyPosts">
    <ProfileInfo />
    <MyPosts posts={props.profilePage.posts}
    NewPostText={props.profilePage.NewPostText}
    dispatch={props.dispatch}/>
    </div>


  );
}

export default Profile;
