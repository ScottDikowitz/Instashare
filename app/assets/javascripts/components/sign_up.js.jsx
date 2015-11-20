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
        <form onSubmit={ this.submit }>

          <h1>Sign Up!</h1>

          <label>
            Name
            <input type="text" name="username" />
          </label>

          <label>
            Password
            <input type="password" name="password" />
          </label>

          <label>
            Bio
            <textarea name="body"></textarea>
          </label>

          <button>Join!</button>
        </form>
      );
    },

  });
})(this);
