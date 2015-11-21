(function(root) {
  root.SignUp = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      var credentials = $(e.currentTarget).serializeJSON();
      ApiUtil.createUser(credentials, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },

    render: function() {

      return (
        <form className="sign-in" onSubmit={ this.submit }>

          <h1>Sign Up</h1>

        <ul>
          <li>
          <label>
            Username
            <input type="text" name="username" />
          </label>
          </li>
          <li>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          </li>
          <li>
          <label>
            Bio
            <textarea name="body"></textarea>
          </label>
          </li>

          <button>Join!</button>
          </ul>
        </form>
      );
    },

  });
})(this);
