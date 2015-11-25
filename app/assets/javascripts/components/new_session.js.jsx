(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      if (typeof e !== "undefined"){
        e.preventDefault();
      }
      // debugger;
      var form = React.findDOMNode(this.refs.sform);

      var credentials = $(form).serializeJSON();
      SessionsApiUtil.login(credentials, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },

    guestLogin: function(){
      var uname = React.findDOMNode(this.refs.uname);
      uname.value = "guest";
      // var pwrd = React.findDOMNode(this.refs.pwrd);
      // pwrd.value = "";
      this.submit();

    },

    render: function() {

      return (
        <div className="sign-in">
          <form ref="sform" onSubmit={ this.submit }>

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
            </li>
            <li>
              <a href="/#signup">signup</a>
            </li>
          </ul>
          </form>
        <button onClick={this.guestLogin}>Guest Account signin</button>
        </div>
      );
    },

  });
})(this);
