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

   toggleOptions: function(e){
     if (e.target.className === "user-drop"){
       var options = $(".user-options");

       options.toggleClass("disp");
       setTimeout(function(){options.toggleClass("active");}, 0);
    }

   },

  render: function(){
    var button;
    var users;
    var search;
    var logo;
    var hide;
    if (CurrentUserStore.isLoggedIn()){
      search = <Search />;
      button = <li className="sign-out-button"><button  onClick={this.signOut}>Sign out</button></li>;
      users = <li><a className="users" href="#/users/">Users</a></li>;
      logo = <a className="logo" href="#/feed">Instashare</a>;
    }
    else{
      logo = <a href="#/signin"><span className="logo">Instashare</span></a>;
      hide = " hidden";
    }
    return <div className={hide}>
            <div className="header group">
              <div className="header-nav group">
                <ul className="nav-ul">
                  <li className="block">
                    {logo}
                  </li>
                    {search}
                    <div className="nav-links">
                  {users}
                  <li onClick={this.toggleOptions} className="user-name-nav"><span className="user-drop">{this.state.currentUser.username}</span>
                    <ul className="user-options">
                      <li><a href={"#/users/" + this.state.currentUser.username}>My Profile</a></li>
                      {button}
                    </ul>
                  </li>

              </div>
                </ul>
              </div>

            </div>
          </div>;
  }
});
