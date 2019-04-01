import React, { Component } from 'react';
import main from '../images/main.jpeg';
import profile from '../images/profile.jpg';
import './Profile.css';

import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = (props) => {
  return (
    <div className="Profile">
    <div className="mainphoto">
    <img className="mainphoto1" src={main} width="100%"/>
    </div>
    <div className="Photo">
    <img className="mainphoto2" src={profile}/>
    </div>
    <div className="Info">
    <div>Name: Aleh Zahorski</div>
    <div>Age:24 age</div>
    <div>Education: WWSI(WebDev)</div>
    <div>Group: D201</div>
    </div>

    <div className="MyPosts">
    <MyPosts />
    </div>

    </div>
  );
}

export default Profile;
