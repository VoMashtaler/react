import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar  />
      {/* <Route
        render={() => <Navbar  />} />  
      state={props.state.navbarPage} */}

      <div className="app-wrapper-content">
        <Route path="/dialogs"
          render={() => <DialogsContainer

          />} />
        <Route path="/profile"
          render={() => <Profile
          />} />
        <Route path="/users"
          render={() => <UsersContainer /> } />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
