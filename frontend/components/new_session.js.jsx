import React from 'react';
import SessionsApiUtil from './../util/sessions_api_util';
const ReactRouter = require('react-router');

var SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function(){
      return ({status: ""});
    },

    submit: function (e) {
      if (typeof e !== "undefined"){
        e.preventDefault();
      }
      var form = this.refs.sform;
      var valid = function () {
        this.history.pushState(null, "/feed");
      }.bind(this);
      var that = this;
      var invalid = function(error){
        that.setState({status: JSON.parse(error.responseText).errors});
      };

      var credentials = $(form).serialize();
      SessionsApiUtil.login(credentials, valid, invalid);
    },

    guestLogin: function(){
      var uname = this.refs.uname;
      uname.value = "Guest";
      // var pwrd = React.findDOMNode(this.refs.pwrd);
      // pwrd.value = "";
      this.submit();

    },

    render: function() {

      return (
          <div className="content-area">

          <div className="sign-in">
            <p className="status">{this.state.status}</p>
            <form ref="sform" onSubmit={ this.submit }>

              <span className="logo centering">Instashare</span>

            <ul>
              <li>
                <input className="session-fields centering" placeholder="username" type="text" name="username" ref="uname" />
              </li>
              <li>
                <input className="session-fields centering" placeholder="password" type="password" name="password" ref="pwrd" />
              </li>
              <li>
                <button className="submit-button centering">Log In</button>
              </li>
              <div className="or-line">
                <div className="line"></div><div className="or">or</div><div className="line"></div>
              </div>
              <li>

              </li>
            </ul>
            </form>
            <div className="bottom-text"><div className="guest-login" onClick={this.guestLogin}>Log in as guest</div> or <a href="/auth/facebook">log in with Facebook. </a>
             Don't have an account? <a href="/#signup">Click here to sign up</a>.</div>
          </div>
        </div>
      );
    },

  });

export default SessionForm;
