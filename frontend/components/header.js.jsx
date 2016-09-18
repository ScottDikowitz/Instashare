import React from 'react';

import CurrentUserStore from './../stores/current_user';
import Search from './search.js';
import SessionsApiUtil from './../util/sessions_api_util';

var Header = React.createClass ({

  getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser()
      };
    },

    componentDidMount: function () {
     CurrentUserStore.addChangeHandler(this._onChange);
   },

   _onChange: function () {
     this.setState({currentUser: CurrentUserStore.currentUser()});
   },

   signOut: function () {
    SessionsApiUtil.signOut();
   },

   toggleOptions: function(e){
     if (e.target.className === "user-drop"){
       var options = $(".user-options");

       options.toggleClass("disp");
       setTimeout(function(){options.toggleClass("active");}, 0);
    }

   },

  render: function(){
    var button;
    var users;
    var search;
    var logo;
    var hide;
    if (CurrentUserStore.isLoggedIn()){
      search = <Search />;
      button = <li className="sign-out-button"><button  onClick={this.signOut}>Sign out</button></li>;
      logo = <a className="logo" href="#/feed">Instashare</a>;
    }
    else{
      logo = <a href="#/signin"><span className="logo">Instashare</span></a>;
      hide = " hidden";
    }
    return <div className={hide}>
            <div className="header group">
              <div className="header-nav group">
                <ul className="nav-ul">
                  <li className="block">
                    {logo}
                  </li>
                    {search}
                    <div className="nav-links">
                  {users}
                  <a href='#/users/' className='icon-explore'/>
                  <a href={'#/users/' + this.state.currentUser.username} className='icon-user'/>
              </div>
                </ul>
              </div>

            </div>
          </div>;
  }
});

export default Header;
