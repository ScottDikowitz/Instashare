(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      var credentials = $(e.currentTarget).serializeJSON();
      SessionsApiUtil.login(credentials, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },

    guestLogin: function(){
      var uname = React.findDOMNode(this.refs.uname);
      uname.value = "guest";
      var pwrd = React.findDOMNode(this.refs.pwrd);
      pwrd.value = "hello1";
      this.submit();

    },

    render: function() {

      return (
        <form className="sign-in" onSubmit={ this.submit }>

          <h1>Sign In</h1>

        <ul>
          <li>
          <label>
            Username
            <input className="fields" type="text" name="username" ref="uname" />
          </label>
          </li>
          <li>
          <label>
            Password
            <input className="fields" type="password" name="password" ref="pwrd" />
          </label>
          </li>
          <li>
          <button className="submit-button">Sign In!</button>
          </li>
          <li>
            <button onClick={this.guestLogin}>Guest Account signin</button>
          </li>
          <li>
            <a href="/#signup">signup</a>
          </li>
        </ul>
        </form>
      );
    },

  });
})(this);
