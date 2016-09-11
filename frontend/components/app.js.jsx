import CurrentUserStore from './../stores/current_user';
import Header from './header.js';
import React from 'react';
const ReactRouter = require('react-router');
import SessionsApiUtil from '../util/sessions_api_util';

var App = React.createClass({

  getInitialState: function () {
   return { currentUser: null };
  },

  mixins: [ReactRouter.History],

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this._ensureLoggedIn);
    SessionsApiUtil.fetchCurrentUser();
    if (this.props.location.pathname === "/"){
      this.history.pushState(null, "/feed");
    }
  },

  compnentWillReceiveProps: function(){

  },

  _ensureLoggedIn: function () {

    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/signin");
    }

    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function(){
    return (
        <div>
          <Header/>
          {this.props.children}
        </div>
    );
  }
});

export default App;
