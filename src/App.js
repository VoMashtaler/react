import React, { Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, HashRouter, Redirect } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/loader/loader';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';
import {Provider} from "react-redux";
import store from './redux/redux-store';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends Component {
  //catchAllUnhandledError
  componentDidMount() {
    this.props.initializeApp();
   // window.addEventListener("unhandledrejection", function(promiseRejectionEvent){ });
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
      <Route exact path="/"
          render={() => <Redirect to={"/profile"} />} />
        <Route path="/dialogs"
            render={withSuspense(DialogsContainer)} />
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
        <Route path="/login"
          render={() => <LoginPage />} />
        {/* <Route path="*"
          render={() => <div>404 NOT FOUND</div>} /> */}

      </div>
    </div>
  );
}};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp}))(App);

  const ShoomApp = (props) => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
  }

  export default ShoomApp;
