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
    var search;
    var logo;
    if (CurrentUserStore.isLoggedIn()){
      search = <Search />;
      button = <li className="sign-out-button"><button  onClick={this.signOut}>Sign out</button></li>;
      users = <li><a className="users" href="#/users/">Users</a></li>;
      logo = <a href="#/feed"><span className="logo">Instashare</span></a>;
    }
    else{
      logo = <a href="#/signin"><span className="logo">Instashare</span></a>;
    }
    return <div>
            <div className="header group">
              <div className="header-nav group">
                <ul>
                <li>
                  {logo}
                </li>
                {search}
                <div className="nav-links">

              {button}
              {users}
              <li>
                <ReactRouter.Link className="user-name-nav" to={"/users/" + this.state.currentUser.username}>
                  {this.state.currentUser.username}
                </ReactRouter.Link>
              </li>
              </div>
                </ul>
              </div>

            </div>
          </div>;
  }
});
