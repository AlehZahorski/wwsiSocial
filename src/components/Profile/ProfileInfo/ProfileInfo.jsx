import React, {Component} from 'react';
import style from './ProfileInfo.module.css';
import main from '../../images/main.jpeg';
import profile from '../../images/profile.jpg';


const ProfileInfo = (props) => {
  return(
    <div className={style.Profile}>
    <div className={style.profile}>
    <img className={style.mainphoto} src={main} width="100%"/>
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
    </div>
  )
}

export default ProfileInfo;
