(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function(){
      return ({status: ""});
    },

    submit: function (e) {
      if (typeof e !== "undefined"){
        e.preventDefault();
      }
      // debugger;
      var form = React.findDOMNode(this.refs.sform);
      var valid = function () {
        this.history.pushState(null, "/feed");
      }.bind(this);
      var that = this;
      var invalid = function(error){
        that.setState({status: JSON.parse(error.responseText).errors});
      };

      var credentials = $(form).serializeJSON();
      SessionsApiUtil.login(credentials, valid, invalid);
    },

    guestLogin: function(){
      var uname = React.findDOMNode(this.refs.uname);
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
                <a className="fbook" href="/auth/facebook">Sign in with Facebook</a><br/>

              </li>
            </ul>
            </form>
          <button className="submit-button" onClick={this.guestLogin}>Guest Account signin</button>
          Don't have an account? <a href="/#signup">signup</a>
          </div>
        </div>
      );
    },

  });
})(this);
