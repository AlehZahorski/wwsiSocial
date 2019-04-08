import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import main from '../images/main.jpeg';
import profile from '../images/profile.jpg';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import DropDown from '../Header/DropDown/DropDown.jsx';



const Profile = (props) => {
    return (
        <div className={style.Profile}>
            <div className={style.profile}>
                <img className={style.mainphoto} src={main}/>
            </div>
            <div className={style.mainphoto2}>
                <img className={style.mainphoto2} src={profile}/>
            </div>

            <div className={style.info}>
                <div>Name: Aleh Zahorski</div>
                <div>Age:24 years</div>
                <div>Education: WWSI(WebDev)</div>
                <div>Group: D201</div>
            </div>


            <div className="MyPosts">
                <MyPosts/>
            </div>

        </div>
    );
}

export default Profile;
