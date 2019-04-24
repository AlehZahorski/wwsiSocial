import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Group from './components/Group/Group';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import DropDown from './components/Header/DropDown/DropDown.jsx';


const App = (props) => {
  return (
     <BrowserRouter>
     <switch className="app-wrapper">
     <Header />
     <div className="app-wrapper-content">
     <Route exact path="/Profile" render={ () => <Profile state={props.state.ProfilePage} addPost={props.addPost}/>}/>
     <Route exact path="/Dialogs" render={ () => <Dialogs state={props.state.DialogsPage} />}/>
     <Route exact path="/News" component={News}/>
     <Route exact path="/Group" component={Group}/>
     <Route exact path="/Settings" component={Settings}/>
     </div>
     <Navbar />
     <Footer />
     </switch>
     </BrowserRouter>

  );
}


export default App;
