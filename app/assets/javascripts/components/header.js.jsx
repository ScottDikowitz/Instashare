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
      button = <li className="sign-out-button"><button  onClick={this.signOut}>Sign out</button></li>;
      users = <li><a className="users" href="#/users/">Users</a></li>;
    }
    return <div>
            <div className="header group">
              <div className="header-nav group">
                <ul>
                <li>
                  <a href="#/"><span className="logo">Instashare</span></a>
                </li>
                <li className="search-bar"><input type="text" placeholder="Search"/></li>
                <div className="nav-links">
                <li>
                  <ReactRouter.Link to={"/users/" + this.state.currentUser.username}>
                    {this.state.currentUser.username}
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
