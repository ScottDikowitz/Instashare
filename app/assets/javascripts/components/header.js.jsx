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
    var users;
    if (CurrentUserStore.isLoggedIn()){
      button = <li><button className="sign-out-button" onClick={this.signOut}>Sign out</button></li>;
      users = <li><a className="users" href="#/users/">Users</a></li>;
    }
    return <div>
            <div className="header group">
              <div className="header-nav group">
                <ul>
                <li>
              <ReactRouter.Link to={"/"}>
                <span className="logo">Instashare</span>
              </ReactRouter.Link>
                </li>
                <div className="nav-links">
                <li>
                  <ReactRouter.Link to={"/users/" + this.state.currentUser.username}>
                    <span className="current-user">{this.state.currentUser.username}</span>
                  </ReactRouter.Link>
                </li>
              {button}
              {users}
              </div>
                </ul>
              </div>

            </div>
          </div>;
  }
});
