import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/loader/loader';
import { initializeApp } from './redux/app-reducer';



class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}
render() {
  if (!this.props.initialized) {
    return <Preloader/>
  }
  return (
    <div className="app-wrapper">

      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs"
            render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
        <Route path="/login"
          render={() => <LoginPage />} />

      </div>
    </div>
  );
}};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp}))(App);
