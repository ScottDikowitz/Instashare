import React from 'react';
import ApiUtil from './../util/api_util';
import $ from 'jquery';
import 'jquery-serializejson';

var SignUp = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    submit: function (e) {
      e.preventDefault();
      var credentials = $(e.currentTarget).serializeJSON();
      ApiUtil.createUser(credentials, function () {
        this.context.router.push("/feed");
      }.bind(this));
    },

    render: function() {

      return (
        <div className="content-area">
          <form className="sign-in" onSubmit={ this.submit }>

            <span className="logo centering">Instashare</span>

          <ul>
            <li>
              <input className="session-fields centering" placeholder="username" type="text" name="username" />
            </li>
            <li>
              <input className="session-fields centering" placeholder="password" type="password" name="password" />
            </li>
            <li>
              <textarea className="session-fields centering" placeholder="Describe yourself here..." name="body"></textarea>
            </li>
            <li>
              <button className="submit-button centering lower-margin">Join!</button>
            </li>
            <div className="bottom-text">
              Already have an account? <a href="/#signin">Click here to log in.</a>
          </div>

            </ul>
          </form>
        </div>
      );
    },

  });

export default SignUp;
