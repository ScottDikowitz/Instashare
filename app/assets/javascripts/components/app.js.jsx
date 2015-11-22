(function(root) {
  root.App = React.createClass({

  getInitialState: function () {
   return { currentUser: null };
  },

  mixins: [ReactRouter.History],

  componentWillMount: function () {
    CurrentUserStore.addChangeHandler(this._ensureLoggedIn);
    SessionsApiUtil.fetchCurrentUser();
  },

  _ensureLoggedIn: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/signin");
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
})(this);