import CurrentUserStore from './../stores/current_user';
import Header from './header.js';
import React from 'react';
import SessionsApiUtil from '../util/sessions_api_util';

var App = React.createClass({
    contextTypes: {
            router: React.PropTypes.object.isRequired
    },

  getInitialState: function () {
   return { currentUser: null };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this._ensureLoggedIn);
    SessionsApiUtil.fetchCurrentUser();
    if (this.props.location.pathname === "/"){
      this.context.router.push("/feed");
    }
  },

  compnentWillReceiveProps: function(){

  },

  _ensureLoggedIn: function () {

    if (!CurrentUserStore.isLoggedIn()) {
      this.context.router.push("/signin");
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
