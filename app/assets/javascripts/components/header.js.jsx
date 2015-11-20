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

  render: function(){
    var button;
    if (CurrentUserStore.isLoggedIn()){
      button = <button className="sign-out-button" onClick={this.signOut}>Sign out</button>;
    }
    return <div>
            <div className="header">
              <div className="header-nav">
              <ReactRouter.Link to={"/"}>
                <span className="logo">Instashare</span>
              </ReactRouter.Link>

              <ReactRouter.Link to={"/users/" + this.state.currentUser.username}>
                <span className="current-user">{this.state.currentUser.username}</span>
              </ReactRouter.Link>
              {button}

              </div>
            </div>
          </div>;
  }
});
