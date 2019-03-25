import React, { Component } from 'react';
import main from './images/main.jpeg';
import profile from './images/profile.jpg';
import '../MainMenu.css';


const Profile = () => {
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


   <div className="AddPosts">
      <div id="addpost">
        Writing and add your post
      </div>
      <div id="InputAddPosts">
      <input type="text" id="lastname"></input>
      <input  className="buttonaddpost" type="button" value="Touch it"></input>
      </div>
   </div>


    <div className="NewPosts">
      New posts 1
    </div>
    <div className="NewPosts2">
      New posts 2
    </div>
    <div className="NewPosts3">
      New posts 3
    </div>
    <div className="NewPosts4">
      New posts 4
    </div>


</div>
);
}

export default Profile;
