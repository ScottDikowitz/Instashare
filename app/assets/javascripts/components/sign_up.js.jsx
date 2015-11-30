(function(root) {
  root.SignUp = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      var credentials = $(e.currentTarget).serializeJSON();
      ApiUtil.createUser(credentials, function () {
        this.history.pushState(null, "/feed");
      }.bind(this));
    },

    render: function() {

      return (
        <div className="content-area">
          <form className="sign-in" onSubmit={ this.submit }>

            <h1>Sign Up</h1>

          <ul>
            <li>
            <label>
              Username
              <input className="fields" type="text" name="username" />
            </label>
            </li>
            <li>
            <label>
              Password
              <input className="fields" type="password" name="password" />
            </label>
            </li>
            <li>
            <label>
              Bio
              <textarea className="fields" name="body"></textarea>
            </label>
            </li>
            <li>
              <button className="submit-button">Join!</button>
            </li>
            <li>
              <a href="/#signin">signin</a>
            </li>

            </ul>
          </form>
        </div>
      );
    },

  });
})(this);
